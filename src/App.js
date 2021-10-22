import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Topbar';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import AddMedicine from './components/Admin/addMedicine';
import ViewInventory from './components/Admin/viewInventory';
import ViewTeam from './components/Admin/viewTeam';
import SalesExecutive from './components/Admin/addSalesExecutive';
import ViewOrders from './components/SalesExecutive/viewOrders';
import CreateExecutiveOrder from "./components/SalesExecutive/createExecutiveOrder"
import ShowAllOrders from './components/Admin/showAllOrders';
import CreateAdminOrder from "./components/Admin/createAdminOrder";
import OverAllSummary from "./components/SalesOverview/OverAllSummary.jsx"
import ExecutivesPerformance from './components/SalesOverview/ExecutivesPerformance.jsx';


function App({ adminLogin, loginStatus, salesLogin }) {
  return (
    <div>
      <Router>
        <Topbar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/login" exact><Home /></Route>
          {adminLogin && loginStatus && <Route path="/" exact><AddMedicine /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/add_medicine"><AddMedicine /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/view_inventory"><ViewInventory /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/add_sales_executive"><SalesExecutive /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/view_team"><ViewTeam /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/show_all_orders"><ShowAllOrders /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/create_orders"><CreateAdminOrder /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/sales_overview/overall_summary"><OverAllSummary /> </Route>}
          {adminLogin && loginStatus && <Route path="/admin/sales_overview/executive_performance"><ExecutivesPerformance /> </Route>}
          {salesLogin && loginStatus && <Route path="/sales_executive/create_order"><CreateExecutiveOrder /></Route>}
          {salesLogin && loginStatus && <Route path="/sales_executive/view_orders"><ViewOrders /> </Route>}
        </Switch>
      </Router>
    </div>
  );
}


const mapStateToProps = (state) => ({
  adminLogin: state.adminLogin,
  loginStatus: state.loginStatus,
  salesLogin: state.salesLogin
})


export default connect(mapStateToProps, null)(App)
