import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Calculator extends Component {

    static propTypes = {
        Addition: PropTypes.func.isRequired,
        Subtraction: PropTypes.func.isRequired,
        Multiplication: PropTypes.func.isRequired,
        Division: PropTypes.func.isRequired
    };

    state = {
        firstNumber: '',
        secondNumber: '',
        operator:''
    };

    componentWillMount(){
        this.setState({
            firstNumber: '',
            secondNumber: '',
            operator:''
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-lg-6">
                    <form>
                        <div className="form-group">
                            <h1>First Calculator App using ReactJS and NodeJS</h1>
                        </div>
                        <div className="form-group">
                            First Number:<input
                                className="form-control"
                                type="number"
                                placeholder="First Number"
                                value={this.state.firstNumber}
                                onChange={(event) => {
                                    this.setState({
                                        firstNumber: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            Second Number:<input
                                className="form-control"
                                type="number"
                                placeholder="Second Number"
                                value={this.state.secondNumber}
                                onChange={(event) => {
                                    this.setState({
                                        secondNumber: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.Addition(this.state)}>
                                Add
                            </button>
                            &nbsp;
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.Subtraction(this.state)}>
                                Subtract
                            </button>
                            &nbsp;
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.Multiplication(this.state)}>
                                Multiply
                            </button>
                            &nbsp;
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => this.props.Division(this.state)}>
                                Divide
                            </button><br></br><br></br><br></br>
                            <p id="col2"></p>
                        </div>


                    </form>
                </div>
            </div>
        );
    }
}

export default Calculator;