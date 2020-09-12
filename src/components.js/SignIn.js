import React from "react";
import {db, auth} from "./firebase";
import {withRouter} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


class SignIn extends React.Component{
    state={
        id:"",
        password:"",
        firstName:"",
        lastName:"",
        newUserId:"",
        phoneNumber:"",
        gender:null,
        newUserPassword:"",
        confirmPassword:"",
        oldUser:true,
        newUser:false
    }
    handleLogin = (event) => {
        event.preventDefault();
        var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(this.state.id === ""){
            alert( "Please enter your Email Id  ");
        }else if(!mailFormat.test(this.state.id)){
            alert("Email Address is not valid, Please provide a valid Email");
        }else{
            auth.signInWithEmailAndPassword(this.state.id, this.state.password).then((u) => {
                //alert("Successfuly Logged In")
                }).catch((err) => {
                alert(err)
            })
        }
    }
    handleSignUp = (event) => {
        event.preventDefault();
        var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var id = this.state.newUserId;
        var password = this.state.newUserPassword;
        if(password === this.state.confirmPassword){
            if(id === ""){
                alert( "Please enter your Email Id  ");
            }else if(!mailFormat.test(id)){
                alert("Email Address is not valid, Please provide a valid Email");
            } else{
                auth.createUserWithEmailAndPassword(id, password).then((u) => {
                    var user = auth.currentUser;
                    if(this.state.gender === "Female"){
                        user.updateProfile({
                            displayName: this.state.firstName ,
                            phoneNumber:this.state.phoneNumber,
                            photoURL:"https://firebasestorage.googleapis.com/v0/b/test-1183b.appspot.com/o/images%2FFemale.jpg?alt=media&token=310af8fc-8b05-425f-9f5c-7aa143e02a04"
                        })
                    }else{
                        user.updateProfile({
                            displayName: this.state.firstName ,
                            phoneNumber:this.state.phoneNumber,
                            photoURL:"https://firebasestorage.googleapis.com/v0/b/test-1183b.appspot.com/o/images%2FMale.jpg?alt=media&token=fe4c2025-9792-4c31-bdb8-c1aa69e419db"
                        })
                    }
                    db.collection("Users").doc(user.uid).set({
                        email:this.state.newUserId,
                        firstName:this.state.firstName,
                        lastName:this.state.lastName,
                        password:this.state.newUserPassword,
                        phoneNumber:this.state.phoneNumber,
                        isAdmin:false
                    })
                }).catch((error) => alert(error))
            }
        }else{
            alert("Password and confirm Password didn't match")
        }
    }
    render(){
        return (
            <div className="container">
                <h1 className="text-center my-5">Welcome to FlipShop 🛒</h1>
                <div className="row">
                    { (this.state.oldUser === true && this.state.newUser === false) ? (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mx-5">
                                        <h2 className="my-5">Login</h2>
                                        <p className="my-5 text-justify blockquote">Get access to your Orders, Wishlist and Recommendations</p>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/test-1183b.appspot.com/o/images%2Fshop1.jpg?alt=media&token=fe5192d6-a89a-4d12-b26f-1d349949070a" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <form onSubmit={(event)=> this.handleLogin(event)}>
                                        <div className="mt-5">
                                           <input
                                                required
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your Id"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                value={this.state.id}
                                                onChange={(event) => this.setState({id:event.target.value})} 
                                          />
                                        </div>
                                        <div className="my-4">
                                            <input
                                                required
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter your Password"
                                                //pattern="^\{6}$"
                                                value={this.state.password}
                                                onChange={(event) => this.setState({password:event.target.value})} 
                                            />
                                        </div>
                                        <div className="mt-5 mb-3">
                                            <button className="form-control shadow btn" style={{backgroundColor:"#fb641b", color:"white"}}>LOGIN</button>
                                        </div>
                                        <div className="mt-5">
                                            <button className="btn btn-link " onClick={() => this.setState({oldUser:false, newUser:true})}>New to FlipShop? Create an account</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ):(
                        
                        <div className="container">
                            <div className="row ">
                                <div className="col-md-6 ">
                                        <div className="mx-5">
                                            <h2 className="my-5">Looks like you're new here!</h2>
                                            <p className="my-5 text-justify blockquote">Sign up to explore the best online shopping website <span>❤️❤️</span></p>
                                            <img src="https://firebasestorage.googleapis.com/v0/b/test-1183b.appspot.com/o/images%2Fshop1.jpg?alt=media&token=fe5192d6-a89a-4d12-b26f-1d349949070a" />
                                        </div>
                                    </div>
                                <div className="col-md-6">
                                        <form onSubmit={(event) => this.handleSignUp(event)}>
                                            <div className="my-3 ">
                                                <input
                                                    required
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your First Name" 
                                                    value={this.state.firstName}
                                                    onChange={(event) => this.setState({firstName:event.target.value})}
                                                />
                                            </div>
                                            <div className="my-3 ">
                                                <input
                                                    required
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your Last Name" 
                                                    value={this.state.lastName}
                                                    onChange={(event) => this.setState({lastName:event.target.value})}
                                                />
                                            </div>
                                            <div className="my-3 ">
                                                <input
                                                    required
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter your Id" 
                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                    value={this.state.newUserId}
                                                    onChange={(event) => this.setState({newUserId:event.target.value})}
                                                />
                                            </div>
                                            <div className="my-3 ">
                                                <input
                                                    required
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="Enter your Contact Number" 
                                                    pattern="^\d{10}$"
                                                    value={this.state.phoneNumber}
                                                    onChange={(event) => this.setState({phoneNumber:event.target.value})}
                                                />
                                            </div>
                                            <div className="my-3 ">
                                                <input
                                                    required
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter your Password" 
                                                    pattern="^\d{8}$"
                                                    value={this.state.newUserPassword}
                                                    onChange={(event) => this.setState({newUserPassword:event.target.value})}
                                                />
                                            </div>
                                            <div className="my-3 ">
                                                <input
                                                    required
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Confirm Password" 
                                                    pattern="^\d{8}$"
                                                    value={this.state.confirmPassword}
                                                    onChange={(event) => this.setState({confirmPassword:event.target.value})}
                                                />
                                            </div>
                                            <div className='my-3'  >
                                                <select 
                                                    className="custom-select mr-sm-2 " 
                                                    value={this.state.gender} 
                                                    onChange={event => this.setState({gender:event.target.value})}>
                                                    <option>Select Gender</option>
                                                    <option value='Male'>Male</option>
                                                    <option value='Female'>Female</option>
                                                    <option value='Others'>Others</option>
                                                </select>
                                            </div>
                                            <p className=" my-4">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                            <button className=" form-control btn my-4" style={{backgroundColor:"#fb641b", color:"white"}}>CONTINUE</button>
                                            <button className="form-control btn btn-link" onClick={() => this.setState({oldUser:true, newUser:false})}>Existing user? Log in</button>
                                        </form>
                                    </div>
                            </div>
                        </div>      
                        
                    )}
                </div>                    
            </div>
        )
    }
}

export default withRouter(SignIn);