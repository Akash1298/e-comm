import React from "react";
import {db} from "./firebase";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class AddProduct extends React.Component{
    state={
        sellerName:"",
        productName:"",
        price:"",
        description:"",
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        db.collection("Products").add({
            sellerName: this.state.sellerName,
            productName: this.state.productName,
            price: this.state.price,
            description:this.state.description
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            this.setState({
                sellerName:"",
                productName:"",
                price:"",
                description:"",
            })
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        alert("Added Successfully")
    }
    render(){
        return(
            <div className="container">
                <h2>Add a New Product</h2>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label htmlFor="sellerName">Seller Name :- </label>
                        <input
                            required
                            id="sellerName"
                            type="text"
                            placeholder="Seller Name"
                            value={this.state.sellerName}
                            onChange={(event) => this.setState({sellerName:event.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="productName">Product Name :- </label>
                        <input
                            required
                            id="productName"
                            type="text"
                            placeholder="Product Name"
                            value={this.state.productName}
                            onChange={(event) => this.setState({productName:event.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price :- </label>
                        <input
                            required
                            id="price"
                            type="text"
                            placeholder="Price"
                            value={this.state.price}
                            onChange={(event) => this.setState({price:event.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description :- </label>
                        <input
                            required
                            id="description"
                            type="text"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={(event) => this.setState({description:event.target.value})}
                        />
                    </div>
                    <div>
                        <button>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddProduct;