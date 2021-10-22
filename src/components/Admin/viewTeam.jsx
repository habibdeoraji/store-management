import React, { useState } from 'react';
import Admin from '.';
import { connect } from 'react-redux';
import "./viewTeam.css";
import { updateTeamList } from "../../Redux/actions";
import UpdateExecutiveDetails from './updateExecutiveDetails';
import { userIdForUpdate, updateAllOrdersByExecutive } from "../../Redux/actions"


const ViewTeam = ({ teamList, team_list_after_delete, user_id_for_update, allOrders, update_all_orders_by_executive }) => {
    const [isUpdateForm, setIsUpdateForm] = useState(false);

    const delete_sales_executive_by_id = (executiveId) => {
        console.log(executiveId)

        // Remove orders made by executive.
        const teamMember = teamList.filter(item => item.salesExecutiveId === executiveId)

        const aOrders = []
        allOrders.map(order => {
            if (order.customerName !== `${teamMember[0].firstName} ${teamMember[0].lastName}`) {
                aOrders.push(order)
            }
        })
        console.log(aOrders);
        update_all_orders_by_executive(aOrders)
        localStorage.setItem('allOrders', JSON.stringify(aOrders))

        var teamListAfterDelete = JSON.parse(localStorage.getItem('teamList')) || [];
        teamListAfterDelete = teamListAfterDelete.filter(item => item.salesExecutiveId !== executiveId)
        localStorage.setItem('teamList', JSON.stringify(teamListAfterDelete));
        team_list_after_delete(executiveId)
    }

    // Update Sales Executive Details By ID
    const update_sales_executive_by_id = (id) => {
        setIsUpdateForm(true)
        localStorage.setItem('userIdForUpdate', id)
        user_id_for_update(id)
    }


    const crossClick = () => {
        console.log("Clicked")
        setIsUpdateForm(false)
    }

    return (<div className="view_team">
        <Admin />
        {isUpdateForm && <UpdateExecutiveDetails userIdForUpdate={userIdForUpdate} crossClick={crossClick} />}
        <div className="team_container">
            <div className="team_container_header">
                <p className="sales_executive_id">UserId</p>
                <p className="sales_executive_fname">First Name</p>
                <p className="sales_executive_lname">Last Name</p>
                <p className="sales_executive_dob">DOB</p>
                <p className="sales_executive_gender">Gender</p>
                <p className="sales_executive_experience">Experience</p>
            </div>
            {teamList.map(item => <SalesExecutiveCard executiveDetails={item} delete_sales_executive_by_id={delete_sales_executive_by_id} key={Math.random()} update_sales_executive_by_id={update_sales_executive_by_id} />)}
        </div>

    </div >);
}


const mapStateToProps = (state) => ({
    teamList: state.teamList,
    userIdForUpdate: state.userIdForUpdate,
    allOrders: state.allOrders
})

const mapDispatchToProps = (dispatch) => ({
    team_list_after_delete: (payload) => dispatch(updateTeamList(payload)),
    user_id_for_update: (payload) => dispatch(userIdForUpdate(payload)),
    update_all_orders_by_executive: (payload) => dispatch(updateAllOrdersByExecutive(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewTeam)




// Sales Executive card
const SalesExecutiveCard = (props) => {
    const { firstName, lastName, dob, gender, experience, salesExecutiveId } = props.executiveDetails
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="sales-executive-card" key={Math.random()} >
                <span className="sales_executive_id">{salesExecutiveId}</span>
                <span className="sales_executive_fname">{firstName}</span>
                <span className="sales_executive_fname">{lastName}</span>
                <span className="sales_executive_dob">{dob}</span>
                <span className="sales_executive_gender">{gender}</span>
                <span className="sales_executive_experience">{experience}</span>
            </div>
            <div style={{ marginLeft: "10px", cursor: "pointer", marginRight: "10px" }} onClick={() => props.delete_sales_executive_by_id(salesExecutiveId)} > <i className="fas fa-trash"></i></div>
            <div style={{ cursor: "pointer" }} onClick={() => props.update_sales_executive_by_id(salesExecutiveId)} > <i className="fas fa-edit"></i></div>
        </div>
    );
}


