import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MyProductsPage from './src/screens/myproducts/MyProductsPage';
import ProductPage from './src/screens/product/ProductPage';
import EditPage from './src/screens/editproduct/EditPage';
const Stack = createNativeStackNavigator();

type RootStackParamList = {
    home: undefined;
    product: undefined;
    edit: undefined;
};

export const Navigation: React.FC<RootStackParamList> = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='home'
                    component={MyProductsPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="product" component={ProductPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="edit" component={EditPage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation