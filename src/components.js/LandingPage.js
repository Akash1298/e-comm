import React from "react";
import {Card, Spinner} from "react-bootstrap";
import { db } from "./firebase";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class LandingPage extends React.Component{
    state={
        mobileDoc:[]
    }
    componentDidMount(){
    db.collection("Products").where("category", "==", "mobile")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let productId = doc.id;
            let productName = doc.data().productName;
            let sellerName = doc.data().sellerName;
            let price = doc.data().price;
            let picUrl = doc.data().image;
            let description = doc.data().description;
            this.setState({mobileDoc:[...this.state.mobileDoc, {productName, sellerName, price, picUrl, description, productId}]})
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    }
    render(){
        return (
            <div>
                {this.state.mobileDoc.map((doc) => (
                    <div className="row col-md-6" key={doc.productId}>
                        <div className="col-md-6" >
                            {(doc.picUrl) ? (<img style={{width:"30%"}} src={doc.picUrl}/>):(<Spinner/>)}
                        </div>
                        <div className="col-md-6">
                            <h4>{doc.productName}</h4>
                            <h5>{doc.price}</h5>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default LandingPage;