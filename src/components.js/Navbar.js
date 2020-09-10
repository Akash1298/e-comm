import React from "react";
import {connect} from "react-redux";
import {db, auth} from "./firebase";
import Select from 'react-select';
//import "react-dropdown/style.css";
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
    render(){
        const { selectedOption } = this.state;
        return(
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <div className="row">
                        <div className="d-flex justify-content-around">
                            <div className="blockquote mt-2 mx-5  text-white">
                                FlipShop
                            </div>
                            <div className="mx-5">
                                <form className="form-inline  my-2 my-lg-0">
                                    <input 
                                        className="form-control mr-sm-2" 
                                        type="search" 
                                        placeholder="Search" 
                                        aria-label="Search" 
                                    />
                                    <button 
                                        className="btn btn-outline-light text-white my-2 my-sm-0" 
                                        type="submit">
                                            Search
                                    </button>
                                </form>
                            </div>
                            <div className="mx-5 form-control">
                                {this.props.user.map((user) => (
                                    <Select
                                        key={user.uid}
                                        closeMenuOnSelect={false}
                                        placeholder={user.displayName}
                                        value={selectedOption}
                                        onChange={this.handleChange}
                                        options={options}
                                    />
                                ))}
                            </div>
                        </div>
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
export default connect(mapStateToProps)(Navbar);