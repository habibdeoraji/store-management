import React, { useState } from 'react';
import { connect } from 'react-redux';
import SalesPerMonth from './SalesPerMonth';
import "./sales_overview.css"
import TopAndBottomInSales from './TopAndBottomInSales';
import TopMenuBar from './TopMenuBar';
import TotalSalesChart from './TotalSalesChart';

const OverAllSummary = ({ allOrders, teamList }) => {
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


    console.log(performanceData)
    return (<React.Fragment>
        <TopMenuBar />
        <div style={{ width: "80%", paddingTop: "40px", display: "flex" }}>
            <TotalSalesChart salesAllOrder={allOrders} />
            <TopAndBottomInSales allOrders={allOrders} teamList={teamList} />
            <SalesPerMonth />
        </div >
    </React.Fragment>);
}


const mapStateToProps = (state) => ({
    allOrders: state.allOrders,
    teamList: state.teamList
})

export default connect(mapStateToProps, null)(OverAllSummary);

