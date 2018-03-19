import React from 'react';
import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import {actiondash, actionbid} from "../actions/loginactions";
import history from "./history";

class dashboard extends React.Component {


    componentWillMount()
    {
        this.props.dash();
    }

    navigate()
    {
        history.push('/bids');
    }
    render() {
            if(this.props.Bid)
            {
                this.navigate();
            }
        return (
            <div>
            <Table>
                <thead>
                <tr>
                    <th>Project Names</th>
                    <th>Details</th>
                    <th>ProjectDescription</th>
                    <th>Budget</th>
                    <th>Place Bid</th>
                </tr>
                </thead>
                <tbody>
                {console.log(this.props.Dashed)}
               {this.props.Dashed.map(row => {
                    return(
                        <tr>
                            <td key={row.projectname}>{row.projectname}</td>
                            <td key={row.ProjectDescription}>{row.ProjectDescription}</td>
                            <td key={row.skills}>{row.skills}</td>
                            <td key={row.budget}>{row.budget}</td>
                            <td><Button color="primary"
                            onClick={() => this.props.dash2(row)}>Details & Bid on!!!</Button></td>
                        </tr>
                    );
                })
               };
                </tbody>
            </Table>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        dash : (data) => dispatch(actiondash(data)),
        dash2: (data) => dispatch (actionbid(data))
    };
}
const mapStateToProps =(stores)=> {
console.log(stores);
    return {
        Dashed : stores.stores.dashed,
        Bid : stores.stores.bids
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(dashboard);