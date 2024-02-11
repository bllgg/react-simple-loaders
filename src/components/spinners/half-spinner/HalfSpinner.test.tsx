// HalfSpinner.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import HalfSpinner from './HalfSpinner';

describe('HalfSpinner', () => {
    it('renders the component', () => {
        const { container } = render(<HalfSpinner />);
        // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
        const spinnerContainer = container.querySelector('.spinner-container');
        expect(spinnerContainer).toBeInTheDocument();
    });
});
