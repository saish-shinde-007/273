import React from 'react';
import {connect} from "react-redux";
import {actionpost} from "../actions/loginactions";
import history from "./history";
import { Button } from 'reactstrap';
import ImageGridList from "./ImageGridList";
import TextField from 'material-ui/TextField';

import Typography from 'material-ui/Typography';
class postproject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectname: '',
            skills: '',
            ProjectDecription: '',
            budget: '',
            File:''
        };
    }

    navigate()
    {
        history.push('/dashboard');
    }
        render()
        {  if (this.props.Posted===200){
            this.navigate();
        }
            return (
                <div>
                    <form>

                        <div className="form-group">
                            <img src="./mainlogo.JPG" alt="FreeLancer App"/>
                            <h1>Tell us what you need done</h1>
                            <p>Get free quotes from skilled freelancers within minutes, view profiles, ratings and
                                portfolios and
                                chat with them. Pay the freelancer only when you are 100% satisfied with their work.</p>
                        </div>


                        <div className="form-group">
                            <h3>Choose a name for your project</h3>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="e.g: Build me a Website"
                                value={this.state.projectname}
                                onChange={(event) => {
                                    this.setState({
                                        projectname: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <h3>Tell us more about your project</h3>
                            <p>Great project descriptions include a little bit about yourself,</p>
                            <p>details of what you are trying to achieve, and any decisions that</p>
                        <p>you have already made about your project. If there are things you</p>
                        <p>are unsure of, don't worry, a freelancer will be able to help </p>
                        <p>you fill in the blanks.</p>
                            <textarea
                                className="form-control"
                                placeholder="Describe your project here..."
                                value={this.state.ProjectDecription}
                                onChange={(event) => {
                                    this.setState({
                                        ProjectDecription: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <p>File Upload</p>
                            <input
                                className="form-control"
                                type="file"
                                value={this.state.File}
                                onChange={(event) => {
                                    this.setState({
                                        File: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <h3>What skills are required?</h3>
                            <p>Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested
                                and experienced in.
                            </p>

                            <input
                                className="form-control"
                                type="textarea"
                                placeholder="What skills are required"
                                value={this.state.skills}
                                onChange={(event) => {
                                    this.setState({
                                        skills: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <p>Enter the Budget for the Project:</p>
                            <input
                            className="form-control"
                            type="textarea"
                            placeholder="$$$"
                            value={this.state.budget}
                            onChange={(event) => {
                            this.setState({
                                budget: event.target.value
                            });
                        }}
                            />
                        </div>

                        <div>
                            <Button
                                color="primary"
                                type="button"
                                onClick={() => this.props.Post(this.state)}>
                                Post_Project
                            </Button>{' '}
                        </div>
                        <div >
                            <Typography
                                align={'center'}
                                type="display3"
                            >
                                My Photo App
                            </Typography>
                            <TextField
                                className={'fileupload'}
                                type="file"
                                name="mypic"
                                onChange={this.handleFileUpload}
                            />
                            <ImageGridList images={this.state.images}/>
                        </div>


                    </form>

                </div>
            );
        }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        Post : (data) => dispatch(actionpost(data))
    };
}
const mapStateToProps =(stores)=> {

    return {
        Posted : stores.stores.posted
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(postproject);