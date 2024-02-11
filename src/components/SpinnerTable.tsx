import React from 'react';
import SegmentedBarLoader from "./bars/segmented-bar-loader/SegmentedBarLoader";
import DottedSpinner from "./spinners/dotted-spinner/DottedSpinner";
import HalfSpinner from "./spinners/half-spinner/HalfSpinner";

const SpinnerTable = () => {
    return (
        <table>
            <thead>
            <tr>
                <th>Spinner Type</th>
                <th>Spinner Component</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Segmented Bar Loader</td>
                <td><SegmentedBarLoader /></td>
            </tr>
            <tr>
                <td>Dotted Spinner</td>
                <td><DottedSpinner /></td>
            </tr>
            <tr>
                <td>Half Spinner</td>
                <td><HalfSpinner /></td>
            </tr>
            </tbody>
        </table>
    );
};

export default SpinnerTable;
