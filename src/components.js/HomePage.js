import React from "react";
import firebase from "firebase";
import {connect} from "react-redux";
import Navbar from "./Navbar";

class HomePage extends React.Component{
    logOut = () => {
        firebase.auth().signOut().then(() => console.log("Logged out Succesfully")).catch((err) => console.log(err))
    }

    render(){
        return(
            <div>  
                <Navbar/>   
                <div>
                    {this.props.user.map((user) => (
                            <h1 key={user.uid}>{user.displayName}</h1>
                    ))
                    } 
                </div>         
                <h1>HomePage of FilpShop</h1>
                <button className="btn btn-lg btn-primary" onClick={() => this.logOut()}>LogOut</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    //console.log("state", state)
    return {user: state}
}
export default connect(mapStateToProps)(HomePage);