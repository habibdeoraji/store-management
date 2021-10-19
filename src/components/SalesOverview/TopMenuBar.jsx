import React from 'react';
import { Link } from 'react-router-dom';
import "./sales_overview.css"


const TopMenuBar = () => {
    return (<div className="top-menu-bar">
        <Link to="/admin/sales_overview/overall_summary" className="btn btn-primary">Overall Summary</Link>
        <Link to="/admin/sales_overview/executive_performance" className="btn btn-primary">Executive Performance</Link>
    </div>);
}

export default TopMenuBar;