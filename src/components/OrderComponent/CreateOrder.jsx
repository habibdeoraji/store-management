import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { createOrder, emptyCart } from "../../Redux/actions";
import { addToCart } from "../../Redux/actions"
// import "../SalesExecutive/createExecutiveOrder"



const CreateOrder = ({ create_order, add_to_cart, cartItem, empty_cart, userId }) => {
    const executiveList = JSON.parse(localStorage.getItem('teamList')) || [];
    const medicineList = JSON.parse(localStorage.getItem('inventoryList')) || [];
    const [customerName, setCustomerName] = useState(`${executiveList[0].firstName} ${executiveList[0].lastName}`)
    const [contactNumber, setContactNumber] = useState('')
    const [addToCartQty, setAddToCartQty] = useState(0);
    const [addToCartName, setAddToCartName] = useState(medicineList[0].medicineName);
    const [pricePerUnit, setPricePerUnit] = useState(medicineList[0].price);


    // Price per unit
    useEffect(() => {
        console.log(medicineList, addToCartName)
        medicineList.map((medItem) => {
            console.log(medItem, 35, addToCartName);
            if (medItem.medicineName === addToCartName) {
                setPricePerUnit(medItem.price)
            }
        });
    }, [addToCartName])


    const handleFormSubmit = (e) => {
        const dt = new Date();
        const orderDate = `${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear()}`;
        console.log(orderDate)


        const orderDetails = { customerName: customerName, contactNumber: contactNumber, cartItem: cartItem, orderId: Math.floor((Math.random() * 100000000) + 1), totalCartvalue: totalAmount, userId: userId || 0, orderDate: orderDate }

        e.preventDefault();
        e.target[0].value = ''
        e.target[1].value = ''

        create_order(orderDetails)
        var allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
        allOrders.push(orderDetails);
        localStorage.setItem('allOrders', JSON.stringify(allOrders));

        localStorage.setItem('cartItem', JSON.stringify([]));
        empty_cart()
    }


    const handleAddToCart = (e) => {

        const cartItemDetails = { itemName: addToCartName, itemQty: addToCartQty, unitPrice: pricePerUnit }

        cartItem = JSON.parse(localStorage.getItem('cartItem')) || [];
        cartItem.push(cartItemDetails);
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
        add_to_cart(cartItemDetails);
    }
    // Total amount
    const totalAmount = cartItem.reduce(function (sum, current) {
        return sum + (current.itemQty) * current.unitPrice;
    }, 0);

    return (<div>
        <h1 style={{ margin: "20px", textAlign: "center", marginLeft: "14%" }}>Make an Order</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="add_to_cart">
                <label >Medicine
                <select value={addToCartName} onChange={(e) => setAddToCartName(e.target.value)} required className="add_to_cart_medicine">
                        {medicineList.length > 0 && medicineList.map((medicineListItem) => {
                            return <option value={`${medicineListItem.medicineName}`} key={medicineListItem.medicineId} >{`${medicineListItem.medicineName}`} </option>
                        })}
                    </select>
                </label>
                <label onChange={(e) => setAddToCartQty(e.target.value)}>Quantity <input type="Number" required /></label>
                <p>Price per unit {pricePerUnit}</p>
                <button className="btn btn-secondary" onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <form className="create_order_form" onSubmit={handleFormSubmit}>
                <div className="executive_details">
                    <div className="form-group">
                        <label htmlFor="customerName">Customer Name</label>
                        <select value={customerName} onChange={(e) => { setCustomerName(e.target.value) }} className="form-control" id="customerName" required>

                            {executiveList.length > 0 && executiveList.map((executiveListItem) => {
                                return <option value={`${executiveListItem.firstName} ${executiveListItem.lastName}`}>{`${executiveListItem.firstName} ${executiveListItem.lastName}`}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input type="text" className="form-control" id="contactNumber" placeholder="Contact Number" onChange={(e) => { setContactNumber(e.target.value) }} required />
                    </div>
                </div>

                {cartItem.length > 0 && <div className="cart-item-header">
                    <p className="cart-item-name">Name</p>
                    <p>Quantity</p>
                    <p>Amount</p>
                </div>}
                {cartItem.map(item =>
                    <div className="cart-item-details" key={Math.random()}>
                        <p className="cart-item-name">{item.itemName}</p>
                        <p>{item.itemQty}</p>
                        <p>{item.itemQty * item.unitPrice}</p>
                    </div>
                )}
                {cartItem.length > 0 && <p style={{ borderTop: "1px solid gray", width: "500px", marginTop: "10px", marginBottom: 0 }}></p>}
                {cartItem.length > 0 && <div style={{ marginTop: "0px" }}>
                    <h3 style={{ margin: 0, marginLeft: "160px" }}>Total Amount = <span style={{ fontWeight: 300 }}>{totalAmount}</span></h3>
                </div>}

                <button type="submit" className="btn btn-primary">Create Order</button>
                <p className="clear-cart-button" onClick={() => {
                    localStorage.setItem('cartItem', JSON.stringify([]));
                    empty_cart()
                }}>Clear Cart</p>

            </form>
        </div>
    </div >);
}


const mapStateToProps = (state) => ({
    cartItem: state.cartItem
})

const mapDispatchToProps = (dispatch) => ({
    create_order: (payload) => dispatch(createOrder(payload)),
    add_to_cart: (payload) => dispatch(addToCart(payload)),
    empty_cart: () => dispatch(emptyCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder)
