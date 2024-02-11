// segmented-bar-loader.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import SegmentedBarLoader from './SegmentedBarLoader';

describe('SegmentedBarLoader', () => {
    it('renders the component', () => {
        const { container } = render(<SegmentedBarLoader />);
        // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
        const loaderElement = container.querySelector('.loading-animation');
        expect(loaderElement).toBeInTheDocument();
    });
});
