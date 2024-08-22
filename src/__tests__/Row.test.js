import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import renderer from 'react-test-renderer';
import RegisterRow from '../components/registerrow/RegisterRow';

describe('RegisterRow', () => {
    it('renders correctly', () => {
        const item = {
            id: 1,
            name: 'Product 1',
        };

        const tree = renderer.create(<RegisterRow item={item} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('calls handleSelectProduct when pressed', () => {
        const item = {
            id: 1,
            name: 'Product 1',
        };

        const mockNavigate = jest.fn();
        const mockSetProductStore = jest.fn();

        jest.mock('@react-navigation/native', () => ({
            useNavigation: () => ({
                navigate: mockNavigate,
            }),
        }));

        jest.mock('../../utils/store/products.store', () => ({
            useGlobalStore: () => ({
                setProductStore: mockSetProductStore,
            }),
        }));

        const component = renderer.create(<RegisterRow item={item} />);
        const instance = component.root;

        const touchableOpacity = instance.findByType(TouchableOpacity);
        touchableOpacity.props.onPress();

        expect(mockSetProductStore).toHaveBeenCalledWith({
            ...item,
            logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
        });
        expect(mockNavigate).toHaveBeenCalledWith('product');
    });
});