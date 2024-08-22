import React from 'react';
import { renderer } from 'react-test-renderer';
import RegisterRow from '../components/registerrow';

test('RegisterRow renders correctly', () => {
    const tree = renderer.create(<RegisterRow />).toJSON();
    expect(tree).toMatchSnapshot();
}
);
