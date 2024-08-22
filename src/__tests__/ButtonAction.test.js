import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import renderer from 'react-test-renderer';
import ButtonAction from './../components/buttons/ButtonAction';

describe('ButtonAction', () => {
    it('renders correctly', () => {
        const mockAction = jest.fn();
        const tree = renderer.create(
            <ButtonAction
                title="Test Button"
                severity="primary"
                action={mockAction}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('calls the action function when pressed', () => {
        const mockAction = jest.fn();
        const component = renderer.create(
            <ButtonAction
                title="Test Button"
                severity="primary"
                action={mockAction}
            />
        );
        const button = component.root.findByType(TouchableOpacity);
        button.props.onPress();
        expect(mockAction).toHaveBeenCalled();
    });
});