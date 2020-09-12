import React from "react";
import {connect} from "react-redux";
import {auth} from "./firebase";
import {withRouter} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


class Navbar extends React.Component{
    state={
        //selectedOption:null,
    }
    logOut = () => {
        auth.signOut().then(() => console.log("Logged out Succesfully")).catch((err) => console.log(err));
    }
    addNewProduct = (id) => {
        this.props.history.push({pathname:`/addproduct/${id}`})
    }
    viewProfile = (id) => {
        if(id === undefined){
            alert("Not found")
        }else{
            this.props.history.push({pathname:`/viewprofile/${id}`})
        }
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-light bg-dark justify-content-around">
                    <a href="#home" className="navbar-brand text-white">FlipShop</a>
                    <form className="form-inline">
                        <input 
                            className="form-control mr-sm-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <div>
                        {this.props.user.map((user) => (
                            <button key={user.uid} className="btn btn-dark btn-outline-white btn-lg mt-2" onClick={() => this.viewProfile(user.uid)}>{user.displayName}</button>
                        ))}
                    </div>
                    <button className="btn btn-dark btn-outline-white btn-lg mt-2" href="#"><span>🛒Cart</span></button>
                    <div>
                        {this.props.user.map((user) => (
                            <div key={user.uid}>
                                {(user.email=== "akashrana0153@gmail.com") ? (
                                    <button className="btn btn-dark btn-outline-white btn-lg mt-2" 
                                        onClick={() => this.addNewProduct(user.uid)}
                                        >Add new Product
                                    </button>
                                    ):(null)
                                }
                            </div>
                        ))} 
                    </div>
                    <button className="btn btn-dark btn-outline-white btn-lg mt-2" onClick={() => this.logOut()}>Log Out</button>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {user: state}
}
export default  connect(mapStateToProps)(withRouter(Navbar));
