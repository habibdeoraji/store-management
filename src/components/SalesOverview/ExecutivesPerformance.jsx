import React, { useState } from 'react';
import { connect } from 'react-redux';
import "./sales_overview.css"
import TopMenuBar from './TopMenuBar';

const ExecutivesPerformance = ({ allOrders, teamList }) => {
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
    return (
        <React.Fragment>
            <TopMenuBar />
            <div style={{ width: "80%", margin: "0px auto" }}>
                <table class="table table-bordered" style={{ textAlign: "center" }}>
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Executive Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Sale Count</th>
                            <th scope="col">Total Sale Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {performanceData.map(executivePerformance => {
                            const { executiveId, name, saleCount, totalSaleValue } = executivePerformance
                            return <tr>
                                <th scope="row">{executiveId}</th>
                                <td>{name}</td>
                                <td>{saleCount}</td>
                                <td>{totalSaleValue}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div >
        </React.Fragment>
    );
}


const mapStateToProps = (state) => ({
    allOrders: state.allOrders,
    teamList: state.teamList
})

export default connect(mapStateToProps, null)(ExecutivesPerformance);

