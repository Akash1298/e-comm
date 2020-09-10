import React from "react";
import {connect} from "react-redux";
import {auth} from "./firebase";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const options = [
    { value: 'notification', label: 'Notifications' },
    { value: 'edit_profile', label: 'Edit Profile' },
    { value: 'logOut', label: 'Log Out' },
  ];
  

class Navbar extends React.Component{
    state={
        selectedOption:null,
    }
    logOut = () => {
        auth.signOut().then(() => console.log("Logged out Succesfully")).catch((err) => console.log(err))
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    addNewProduct = (id) => {
        this.props.history.push({pathname:`/addproduct/${id}`})
    }
    render(){
        const { selectedOption } = this.state;
        return(
            <div>
                <nav className="navbar navbar-light bg-dark justify-content-around">
                    <a className="navbar-brand text-white">FlipShop</a>
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
                            <a key={user.uid} className="text-white blockquote" href="#">{user.displayName}</a>
                        ))}
                    </div>
                    <a className="text-white blockquote mt-3" href="#">More</a>
                    <a className="text-white blockquote mt-3" href="#">🛒Cart</a>
                    <div>
                        {this.props.user.map((user) => (
                            <div key={user.uid}>
                                {(user.email=== "akashrana0153@gmail.com") ? (
                                    <div className="text-white blockquote mt-3" 
                                        onClick={this.addNewProduct(user.uid)}>
                                            Add new Product
                                    </div>
                                    ):(null)
                                }
                            </div>
                        ))} 
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    //console.log("state", state)
    return {user: state}
}
export default compose( withRouter, connect(mapStateToProps))(Navbar);

