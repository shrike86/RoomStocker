import * as React from 'react';
import 'react-native-gesture-handler';

import { AboutScreen } from '../screens/AboutScreen';
import { createStackNavigator } from '@react-navigation/stack';

export const AboutStackNavigator = ({ navigation, route }) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="AboutScreen">
            <Stack.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={() => ({
                    title: 'About',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#28587B' },
                })}
            />
        </Stack.Navigator>
    );
};
