import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { createOrder, emptyCart, updateInventoryDetails } from "../../Redux/actions";
import { addToCart } from "../../Redux/actions"


const CreateOrder = ({ create_order, add_to_cart, cartItem, empty_cart, userId, update_sold_qty }) => {
    const executiveList = JSON.parse(localStorage.getItem('teamList')) || [];
    const medicineList = JSON.parse(localStorage.getItem('inventoryList')) || [];
    const [customerName, setCustomerName] = useState(executiveList.length > 0 ? `${executiveList[0].firstName} ${executiveList[0].lastName}` : "")
    const [contactNumber, setContactNumber] = useState('')
    const [addToCartQty, setAddToCartQty] = useState(0);
    const [addToCartName, setAddToCartName] = useState(medicineList.length > 0 && medicineList[0].medicineName);
    const [pricePerUnit, setPricePerUnit] = useState(medicineList.length > 0 && medicineList[0].price);
    const [availableQty, setAvailableQty] = useState(medicineList.length > 0 && medicineList[0].stock - medicineList[0].soldQty);


    // Price per unit
    useEffect(() => {
        medicineList.map((medItem) => {
            if (medItem.medicineName === addToCartName) {
                setPricePerUnit(medItem.price)
                setAvailableQty(medItem.stock - medItem.soldQty)
            }
        });
    }, [medicineList])



    const handleFormSubmit = (e) => {
        const dt = new Date();
        const orderDate = `${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear()}`;
        console.log(orderDate)


        const orderDetails = { customerName: customerName, contactNumber: contactNumber, cartItem: cartItem, orderId: Math.floor((Math.random() * 100000000) + 1), totalCartvalue: totalAmount, userId: userId || 0, orderDate: orderDate }

        e.preventDefault();
        e.target[0].value = ''
        e.target[1].value = ''

        // Sold Qty
        cartItem.map(orderItem => {
            const indexOfMedicine = medicineList.findIndex(x => x.medicineName === orderItem.itemName);
            console.log("orderItem", orderItem)
            medicineList[indexOfMedicine].soldQty = parseInt(medicineList[indexOfMedicine].soldQty) + parseInt(orderItem.itemQty);
        })
        localStorage.setItem('inventoryList', JSON.stringify(medicineList));

        update_sold_qty(medicineList)
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

        // If medicine is already added in cart
        var tota_qty = 0;
        cartItem.map(item => {
            if (item.itemName === addToCartName) {
                tota_qty += parseInt(item.itemQty)
            }
        })

        if (availableQty < tota_qty) {
            alert("Quantity not available")
        } else if (addToCartQty <= 0) {
            alert("Add a valid quantity")
        }
        else {
            localStorage.setItem('cartItem', JSON.stringify(cartItem));
            add_to_cart(cartItemDetails);
        }

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
                <h5 style={{ margin: "0", padding: "0" }}>Price per unit {pricePerUnit}</h5>
                <h5 style={{ margin: "0", padding: "0" }}>Available Qty {availableQty}</h5>
                {(addToCartQty > availableQty) ? <button className="btn btn-secondary " onClick={handleAddToCart} disabled style={{ cursor: "not-allowed" }}>Add to Cart</button> : <button className="btn btn-secondary " onClick={handleAddToCart}>Add to Cart</button>}
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
    empty_cart: () => dispatch(emptyCart()),
    update_sold_qty: (payload) => dispatch(updateInventoryDetails(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder)
