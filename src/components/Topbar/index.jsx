import React from 'react';
import "./topbar.css";
import { connect } from 'react-redux';
import { adminLogout } from '../../Redux/actions';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";



const Topbar = ({ loginStatus, logOutAdmin, adminLogin }) => {
    const history = useHistory()

    return (<div className="topbar">
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe85XE6SrncVWlO_SYZ0mD6TV4c07-4qKMjsJ_DURer7chX7MxMKlRoYDA3RBqHApI1Eg&usqp=CAU" alt="pharmacy-management-software" /></div>
        <div className="topbar-menu">
            {adminLogin && loginStatus && <p> <Link to="/admin/sales_overview/overall_summary" style={{ textDecoration: "none", color: "white" }}> Performance</Link></p>}
            {adminLogin && loginStatus && <p><Link to="/admin/add_medicine" style={{ textDecoration: "none", color: "white" }}> Home</Link></p>}
            {loginStatus && <p onClick={() => {
                localStorage.setItem('loginStatus', false)
                localStorage.setItem('adminLogin', false)
                localStorage.setItem('salesLogin', false)
                history.push("/");
                logOutAdmin()
            }} style={{ cursor: 'pointer' }}>Logout</p>}
        </div>
    </div >);
}



const mapStateToProps = (state) => ({
    loginStatus: state.loginStatus,
    adminLogin: state.adminLogin,
})

const mapDispatchToProps = (dispatch) => ({
    logOutAdmin: () => dispatch(adminLogout(''))

})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)
