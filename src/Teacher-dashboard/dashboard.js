import React from "react";
import Navbars from '../sdashboard/navbar';
import Sidebar from '../sdashboard/sidebar';
import Card3 from '../Teacher-dashboard/card3';
import Footer from '../components/footer/footer';

const Dashboard=()=>{
    return(
        <>
        <Navbars></Navbars>
        <Sidebar></Sidebar>
        <Card3></Card3>
        <Footer></Footer>
        </>
    );
}
export default Dashboard;