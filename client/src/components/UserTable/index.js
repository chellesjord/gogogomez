import React, { useState, Component } from 'react';

class UserTable extends Component {
    render() {
        var heading = [
            'Fist Name',
            'Last Name',
            'Amount Due',
            'Meals Needed',
            'Address',
            'Time',
            'Delivered'];

        var body = [
            ['Harry',
                'Potter',
                '$50',
                'MTWHF',
                '123 Main St',
                '12:30pm',
                'MTWHF',
            ],
            ['Ronald',
                'Weasley',
                '$30',
                'MWF',
                '11101 SE Military Dr',
                '11:00pm',
                'MWF',
            ],
        ];

        return (
            <div>
                <Table heading={heading} body={body} />,
            </div>
        );
    }
}

class Table extends Component {
    render () {
        var heading = this.props.heading;
        var body = this.props.body;
        return (
            <table style={{ width:500 }}>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table>
        );
    }
}

class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}

export default UserTable;