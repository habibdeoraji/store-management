import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#8A55E1", "#5768E1", "#57AEE2", "#55E2CF", "#56E288", "#68E255", "#E3CF56", "#E38956", "#E35568", "#E256AE"];

const TopAndBottomMedicine = ({ inventoryList }) => {
    const [medicineData, setMedicineData] = useState([]);
    const [dataReady, setDataReady] = useState(false);


    useEffect(() => {
        inventoryList.map(item => {
            const medItem = { name: null, value: null }
            medItem.name = item.medicineName;
            medItem.value = item.soldQty;
            const updatedMedicineData = [...medicineData, medItem]
            setMedicineData(updatedMedicineData)
            if (item === inventoryList[inventoryList.length - 1]) {
                setDataReady(true)
            }
            return item
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inventoryList]);


    inventoryList.sort((a, b) => {
        return b.soldQty - a.soldQty;
    })
    return (
        <div>{(dataReady && inventoryList.length > 0) && <div style={{ width: "800px", margin: "0 auto", paddingTop: "0", display: "flex", alignItems: "center" }}><div>
            <h3 style={{ textAlign: "center", marginTop: "0", paddingTop: "0" }}>Sold Medicine Data</h3>
            <table className="table table-bordered" style={{ textAlign: "center", marginBottom: "26px" }}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" style={{ fontSize: "16px", padding: "0 10px", minWidth: "120px" }}>Desc</th>
                        <th scope="col" style={{ fontSize: "16px", padding: "0 10px", minWidth: "120px" }}>Name</th>
                        <th scope="col" style={{ fontSize: "16px", padding: "0 10px", minWidth: "120px" }}>Total Sale</th>
                        <th scope="col" style={{ fontSize: "16px", padding: "0 10px", minWidth: "120px" }}>Sale Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ color: "green" }}>
                        <td >Best Selling</td>
                        <td>{inventoryList[0].medicineName}</td>
                        <td>{inventoryList[0].soldQty}</td>
                        <td>{inventoryList[0].soldQty * inventoryList[0].price}</td>
                    </tr>
                    <tr style={{ color: "red" }}>
                        <td>Least Selling</td>
                        <td>{inventoryList[inventoryList.length - 1].medicineName}</td>
                        <td>{inventoryList[inventoryList.length - 1].soldQty}</td>
                        <td>{inventoryList[inventoryList.length - 1].soldQty * inventoryList[inventoryList.length - 1].price}</td>
                    </tr>
                </tbody>
            </table >
        </div>

            <PieChart width={360} height={240}>
                <Pie
                    data={medicineData}
                    cx={180}
                    cy={120}
                    labelLine={true}
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label
                    style={{ cursor: "pointer" }}
                >
                    {medicineData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>}
        </div>
    );
}




const mapStateToProps = (state) => ({
    inventoryList: state.inventoryList,
})

export default connect(mapStateToProps, null)(TopAndBottomMedicine);
