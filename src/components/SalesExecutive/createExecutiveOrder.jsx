import React from 'react';
import SalesExecutive from '.';
import "./createOrder.css"
import CreateOrder from '../OrderComponent/CreateOrder.jsx';




const CreateAdminOrder = () => {

    return (<div>
        <SalesExecutive />
        <CreateOrder userId={10001} />
    </div>)
}

export default CreateAdminOrder
