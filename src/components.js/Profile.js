import React from "react";
import {db} from  "./firebase";
import {withRouter} from "react-router-dom";
//import Navbar from "./Navbar";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


class Profile extends React.Component{
    state={
        userID:"",
        data:[]
    }
    componentDidMount(){
        db.collection("Users").doc(this.props.match.params.id).get().then((doc) => {
            let id = doc.id
            let firstName = doc.data().firstName;
            let lastName = doc.data().lastName;
            let isAdmin = doc.data().isAdmin;
            let phoneNumber = doc.data().phoneNumber;
            let photoURL = doc.data().photoURL;
            let gender = doc.data().gender;
            let email = doc.data().email;
            this.setState({data:[...this.state.data, {firstName, lastName, isAdmin, phoneNumber, photoURL, gender, email, id}]})
        }).catch((error) => alert(error))
        
    }
    editProfile = (id) => {
        this.props.history.push({pathname:`/editprofile/${id}`})
    }
    render(){
        return (
            <div>
                <div>
                    {this.state.data.map((data, index) => (
                    <div key={index} className="container my-5">
                        <button className="btn btn-secondry btn-lg my-5" onClick={this.props.history.goBack}>← Go Back</button>
                        <div className="card" >
                            <div className="row">
                                <div className="col-md-6 my-5">
                                    <img style={{width:"40%"}} className="mx-5" src={data.photoURL}  alt="Profile image " />
                                </div>
                                <div className="col-md-6 my-5">
                                    <h5>{data.firstName}&nbsp;{data.lastName}</h5>
                                    <p>Gender :-{data.gender}</p>
                                    <p>Email :-{data.email}</p>
                                    <p >Phone Number :-{data.phoneNumber}</p>
                                    <div className="my-5">
                                        <button className="btn btn-primary mr-5" onClick={() => this.editProfile(data.id)}>Edit Details</button>
                                        <button className="btn btn-primary" onClick={() => alert("Currently Not Working !!")}>Delete Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default withRouter(Profile);