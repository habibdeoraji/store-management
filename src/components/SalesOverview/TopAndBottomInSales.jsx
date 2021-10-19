import React, { useState } from 'react';



const TopAndBottomInSales = ({ allOrders, teamList }) => {
    const [totalSalesAmount, setTotalSalesAmount] = useState(0)
    const [performanceData, setPerformanceData] = useState(teamList.map(person => {
        return {
            name: `${person.firstName} ${person.lastName}`,
            executiveId: person.salesExecutiveId,
            saleCount: 0,
            totalSaleValue: 0
        }
    }));

    allOrders.map(orderItem => {
        const indexOfCustomer = performanceData.findIndex((user) => orderItem.customerName === user.name)
        performanceData[indexOfCustomer].saleCount = performanceData[indexOfCustomer].saleCount + 1;
        performanceData[indexOfCustomer].totalSaleValue += orderItem.totalCartvalue;

    })

    performanceData.sort((a, b) => {
        return b.totalSaleValue - a.totalSaleValue;
    })
    console.log(performanceData)

    return (<div>
        <div>
            <h5 style={{ color: "green" }}>Best Performing Sales Executive</h5>
            <table className="table table-bordered" style={{ textAlign: "center", marginBottom: "26px" }}>
                <thead className="thead-light">
                    <tr>
                        <th scope="col" style={{ fontSize: "16px", padding: "0 10px", minWidth: "120px" }}>Name</th>
                        <th scope="col" style={{ fontSize: "16px", padding: "0 10px", minWidth: "120px" }}>Total Sale</th>
                        <th scope="col" style={{ fontSize: "16px", padding: "0 10px", minWidth: "120px" }}>Sale Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{performanceData[0].name}</td>
                        <td>{performanceData[0].saleCount}</td>
                        <td>{performanceData[0].totalSaleValue}</td>
                    </tr>
                </tbody>
            </table >
            <h5 style={{ color: "red" }}>Worst Performing Sales Executive</h5>
            <table className="table table-bordered" style={{ textAlign: "center" }}>
                <thead className="thead-light">
                    <tr>
                        <th scope="col" style={{ fontSize: "16px", padding: "0 10px", minWidth: "120px" }}>Name</th>
                        <th scope="col" style={{ fontSize: "16px", padding: "0 10px", minWidth: "120px" }}>Total Sale</th>
                        <th scope="col" style={{ fontSize: "16px", padding: "0 10px", minWidth: "120px" }}>Sale Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{performanceData[performanceData.length - 1].name}</td>
                        <td>{performanceData[performanceData.length - 1].saleCount}</td>
                        <td>{performanceData[performanceData.length - 1].totalSaleValue}</td>
                    </tr>
                </tbody>
            </table >
        </div >
    </div >);
}

export default TopAndBottomInSales;