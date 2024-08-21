import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MyProductsPage from './src/screens/myproducts/MyProductsPage';
const Stack = createNativeStackNavigator();

export const Navigation: React.FC = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='home'
                    component={MyProductsPage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation