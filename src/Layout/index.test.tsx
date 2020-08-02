import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Layout from './index';

describe('TESTING for Layout Component', () => {
    afterEach(cleanup);

    it('The text value of HERE should be present', () => {
        const { getByText } = render(
            <Layout>
                <div>HERE</div>
            </Layout>
        );
        expect(getByText('HERE')).toBeTruthy();
    });
    it('The text value of HEADER should be present', () => {
        const { getByText } = render(
            <Layout>
                <div>HERE</div>
            </Layout>
        );
        expect(getByText('HEADER')).toBeTruthy();
    });
    it('The text value of FOOTER should be present', () => {
        const { getByText } = render(
            <Layout>
                <div>HERE</div>
            </Layout>
        );
        expect(getByText('FOOTER')).toBeTruthy();
    });
});
