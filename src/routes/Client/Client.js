import React from 'react';
import "./Client.css"
import Form from "../../components/Form/Form"
import Nav from "../../components/Nav/Nav"
import ClientClientSection from "../../components/db_ClientSection/ClientClientSection"

const Vendor = () => {
   
    return (
        <div className="gridContainerClient">
            <Nav></Nav>
            <Form key="form1"></Form>
            <ClientClientSection key="clientSection1"></ClientClientSection>
        </div>
    );
}

export default Vendor;