import React from 'react';
import { render } from '@testing-library/react';
import DottedSpinner from './DottedSpinner';

describe('DottedSpinner', () => {
    it('renders the component', () => {
        const { getByTestId } = render(<DottedSpinner />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const spinner = getByTestId('dotted-spinner'); // Ensure the attribute value matches
        expect(spinner).toBeInTheDocument();
    });
});
