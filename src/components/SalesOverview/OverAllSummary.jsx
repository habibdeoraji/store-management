import React, { useState } from 'react';
import { connect } from 'react-redux';
import "./sales_overview.css"
import TopMenuBar from './TopMenuBar';

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
        console.log(performanceData[indexOfCustomer]);
        performanceData[indexOfCustomer].saleCount = performanceData[indexOfCustomer].saleCount + 1;
        performanceData[indexOfCustomer].totalSaleValue += orderItem.totalCartvalue;
    })


    console.log(performanceData)
    return (<React.Fragment>
        <TopMenuBar />
        <div style={{ width: "80%", paddingTop: "100px" }}>
        </div >
    </React.Fragment>);
}


const mapStateToProps = (state) => ({
    allOrders: state.allOrders,
    teamList: state.teamList
})

export default connect(mapStateToProps, null)(OverAllSummary);

