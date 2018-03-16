import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class postproject extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            projectname: '',
            skills: '',
            ProjectDecription: '',
            dropdownOpen: false
        };

    }
        toggle() {
            this.setState({
                dropdownOpen: !this.state.dropdownOpen
            });
        }


        render()
        {
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
                            <p>Great project descriptions include a little bit about yourself, details of what you are
                                trying to achieve, and any decisions that
                                you have already made about your project. If there are things you are unsure of, don't
                                worry, a freelancer will be able to help
                                you fill in the blanks.

                            </p>
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
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>
                                    Select a Project Type
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Micro Project ($10-30 USD) </DropdownItem>
                                    <DropdownItem>Simple Project ($30-250 USD) </DropdownItem>
                                    <DropdownItem>Very small Project ($250-750 USD) </DropdownItem>
                                    <DropdownItem>Small Project ($750-1500 USD) </DropdownItem>
                                    <DropdownItem>Medium Project ($1500-3000 USD) </DropdownItem>
                                    <DropdownItem>Large Project ($3000-5000 USD) </DropdownItem>
                                    <DropdownItem>Larger Project ($5000-10000 USD) </DropdownItem>
                                    <DropdownItem>Larger Project ($5000-10000 USD) </DropdownItem>
                                    <DropdownItem>Very Large Project ($10000-20000 USD) </DropdownItem>
                                    <DropdownItem>Huge Project ($20000-50000 USD) </DropdownItem>
                                    <DropdownItem>Major Project ($50000 USD) </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>
                    </form>

                </div>
            );
        }
}

export default postproject;