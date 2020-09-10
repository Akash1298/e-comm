import React from "react";
import {db} from "./firebase";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

registerPlugin( FilePondPluginImagePreview);

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
                <h1 className=" my-5">Add a New Product**</h1>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="sellerName">Seller Name :- </label>
                        <input
                            required
                            id="sellerName"
                            type="text"
                            className="form-control"
                            placeholder="Seller Name"
                            value={this.state.sellerName}
                            onChange={(event) => this.setState({sellerName:event.target.value})}
                        />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="productName">Product Name :- </label>
                            <input
                                required
                                id="productName"
                                type="text"
                                className="form-control"
                                placeholder="Product Name"
                                value={this.state.productName}
                                onChange={(event) => this.setState({productName:event.target.value})}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="price">Price :- </label>
                            <input
                                required
                                id="price"
                                type="text"
                                className="form-control"
                                placeholder="Price"
                                value={this.state.price}
                                onChange={(event) => this.setState({price:event.target.value})}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description :- </label>
                        <input
                            required
                            id="description"
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={(event) => this.setState({description:event.target.value})}
                        />
                    </div>
                    <div>
                        <FilePond 
                            allowMultiple={true} 
                            //onupdatefiles={fileItems => fileItems.map((fileItem) => this.setState({image:fileItem.file}))}   
                        />
                    </div>
                    <div>
                        <button className="btn btn-success btn-g form-control my-5">
                            SUBMIT
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-g form-control mb-5" onClick={this.props.history.goBack}>
                            BACK
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddProduct;