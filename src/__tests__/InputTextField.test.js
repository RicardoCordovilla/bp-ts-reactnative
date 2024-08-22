import React from 'react';
import renderer from 'react-test-renderer';
import InputTextField from './../../src/components/fields/inputfield/InputTextField';


// test('renders InputTextField correctly', () => {
//     const component = renderer.create(<InputTextField />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });

describe('InputTextField', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <InputTextField
                label="Test Label"
                value="Test Value"
                placeholder="Test Placeholder"
                onChange={() => {}}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
