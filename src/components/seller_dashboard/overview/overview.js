import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './overview.scss';

class Overview extends Component {
    render() {
        return (
                <table class="table">
                <thead>
                    <tr>
                        <th>
                            AquaFPS
                        </th>
                        <th>
                            Products Sold
                        </th>
                        <th>
                            Purchase Price
                        </th>
                        <th>
                            Total Earned
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Today
                        </td>
                        <td>
                            Column content
                        </td>
                        <td>
                            Column content
                        </td>
                        <td>
                            Column content
                        </td>
                    </tr>
                    <tr>
                        <td>
                            This Month
                        </td>
                        <td>
                            Column content
                        </td>
                        <td>
                            Column content
                        </td>
                        <td>
                            Column content
                        </td>
                    </tr>
                    <tr>
                        <td>
                            This Year
                        </td>
                        <td>
                            Column content
                        </td>
                        <td>
                            Column content
                        </td>
                        <td>
                            Column content
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Overview;
