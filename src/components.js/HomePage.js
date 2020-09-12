import React from "react";
import firebase from "firebase";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";

class HomePage extends React.Component{
    logOut = () => {
        firebase.auth().signOut().then(() => console.log("Logged out Succesfully")).catch((err) => console.log(err))
    }

    render(){
        return(
            <div>  
                <Navbar/>   
                <LandingPage/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    //console.log("state", state)
    return {user: state}
}
export default connect(mapStateToProps)(HomePage);