import React from 'react';
import './LoadingAnimation.css'

const DottedSpinner = () => {
    return (
        <div className="spinner" data-testid="dotted-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default DottedSpinner;
