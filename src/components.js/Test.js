import React from "react";
import Select from 'react-select';
 
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class Test extends React.Component{
    state = {
        selectedOption: null,
      };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render(){
        const { selectedOption } = this.state;
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="row">
                        <div className="">
                            <div className="blockquote mt-2 mx-5  text-white">
                                FlipShop
                            </div>
                            <div>
                                <form className="form-inline my-2 my-lg-0">
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
                            <div className="mx-5 ">
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
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
            </div>
        )
    }
}
export default Test;