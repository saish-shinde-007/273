import React from 'react';
import { Table, Button } from 'reactstrap';
const projects=[{
    name:"Freelancer App",
    details:"Build by Admin",
    budget:"1000",
    bidvalue:"750"
},{
    name:"Amazon App",
    details:"Build by Amazon",
    budget:"5000",
    bidvalue:"4750"
},
    {
        name:"Free App",
        details:"Build by lancer",
        budget:"3000",
        bidvalue:"2750"
    }
];
export default class myproject extends React.Component {
    render() {
        return (
            <Table>
                <thead>
                <tr>
                    <th>Project Names</th>
                    <th>Details</th>
                    <th>Budget</th>
                    <th>Bids</th>
                </tr>
                </thead>
                <tbody>
                {projects.map(row => {
                    console.log("row", row);
                    return(
                    <tr>
                        <td>{row.name}</td>
                        <td>{row.details}</td>
                        <td>{row.budget}</td>
                        <td>{row.bidvalue}</td>
                    </tr>
                    );
                })};
                </tbody>
            </Table>
        );
    }
}
// const mapstatetoprops=(stores)=>
// {
//     return {
//         logout : stores.stores.status,
//         loginstatus : stores.stores.loginstatus
//     };
// }
