import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Calculator from "./Calculator";

class NewerHomePage extends Component {

    state = {
        message: 'Calculator',
    };

    Addition= (userdata) => {
        API.add(userdata)
            .then((response) => {

                this.setState({message:response.message});
                console.log(response)
            });
    };

    Subtraction = (userdata) => {
        API.subtract(userdata)
            .then((response) => {
                this.setState({message:response.message});
                console.log(response)
            });
    };

    Multiplication = (userdata) => {
        API.multiply(userdata)
            .then((response) => {
                this.setState({message:response.message});
                console.log(response)
            });
    };

    Division= (userdata) => {
        API.divide(userdata)
            .then((response) => {
                this.setState({message:response.message});
                console.log(response)
            });
    };

    render() {
        return (
            <div className="container-fluid">
                <Route exact path="/" render={() => (
                    <div>
                        <Calculator Addition={this.Addition}
                                    Subtraction={this.Subtraction}
                                    Multiplication={this.Multiplication}
                                    Division={this.Division}
                        />
                    </div>
                )}/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);