import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

class MyForm extends Component {
constructor(props) {
    super(props);

    this.state = {
   };

}

handleSearch(event) {
    alert("Search button clicked");
    event.preventDefault();

}

render() {

    return (
        <div>
            <header className="headerbg d-flex">
                <div className="container my-auto">
                    <div className="row">
                        <div className="offset-1 col-10 offset-lg-0 col-lg-4">
                            <div id="search-form-div" className="container">
                                <div className="row">
                                    <div className="col-12 my-4">
                                        <h3>Search</h3>
                                        <Form onSubmit={this.handleSearch}>
                                            <FormGroup>
                                                <Input type="select" name="select3" id="select3">
                                                    <option selected disabled>Min Price</option>
                                                    <option value="0">0</option>
                                                    <option value="500">500</option>
                                                    <option value="1000">1000</option>
                                                    <option value="1500">1500</option>
                                                    <option value="2000">2000</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="select" name="select4" id="select4">
                                                    <option selected disabled>Max Price</option>
                                                    <option value="0">0</option>
                                                    <option value="500">500</option>
                                                    <option value="1000">1000</option>
                                                    <option value="1500">1500</option>
                                                    <option value="2000">2000</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="submit" name="search" id="search" className="btn btn-primary" value="Search" />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
}
}

export default MyForm;