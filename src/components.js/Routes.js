import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignInCheck from "./SignInCheck";
import Test from "./Test";
import AddProduct from "./AddProduct";
import EditProfile from "./EditProfile";
import Profile from "./Profile";

class Routes extends React.Component{
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={SignInCheck} />
                        <Route exact path="/test" component={Test} />
                        <Route exact path="/addproduct/:id" component={AddProduct} />
                        <Route exact path="/viewprofile/:id" component={Profile} />
                        <Route exact path="/editprofile/:id" component={EditProfile} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routes;