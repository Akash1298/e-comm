import React from "react";
import firebase from "firebase";
import {connect} from "react-redux";
import HomePage from "./HomePage";
import SignIn from "./SignIn";

class SignInCheck extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:{}
        }
    }
    componentDidMount(){
        this.authListener();
    }
    authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({user:user})
                this.props.dispatch({
                    type:"USER",user
                })
            }else{
                this.setState({user:null})
            }
        })
    }
    render(){
        return(
            <div>
                {(this.state.user) ? (<HomePage/>):(<SignIn/>)}
            </div>
        )
    }
}

export default connect()(SignInCheck);