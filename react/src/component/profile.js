import React from 'react';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import image from './mainlogo.JPG';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {actionlogout} from "../actions/loginactions";
import history from "./history";


class profile extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    componentDidMount(){
        document.title = `Welcome, ${localStorage.getItem("email")} !!`;
    }

    navigate()
    {
        history.push('/');
    }

    render() {
        // if (this.props.logout==='200'){
        //     this.navigate();
        // }
        return(
<div>
    {this.props.loginstatus?
<div>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/profile"><img src={image} alt="FreeLancer App"/></NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <NavLink href="/postproject"><Button color="warning">Post a Project</Button></NavLink>
                    </NavItem>

                        <NavItem>
                            <NavLink href="/">
                                <Button color="Danger"
                                     onClick={() => this.props.Logout()}>LogOut
                                </Button>
                            </NavLink>
                        </NavItem>


                        <NavItem>
                            <NavLink href="/myproject">My Project</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/profile">DashBoard</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
</div>
        :
        history.push('/')}
</div>
    );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        Logout : (data) => dispatch(actionlogout(data))
    };
}
const mapstatetoprops=(stores)=>
{
    return {
        logout : stores.stores.status,
        loginstatus : stores.stores.loginstatus
    };
}

export default connect(mapstatetoprops, mapDispatchToProps)(profile);

// {/*<div>*/}
//     {/*<Button color="Danger"*/}
//             {/*type="button"*/}
//             {/*onClick={() => this.props.Logout()}>*/}
//         {/*LogOut</Button>*/}
// {/*</div>*/}