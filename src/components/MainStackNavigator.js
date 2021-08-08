import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { GameList } from '../screens/GameList';
import { CreateGame } from '../screens/CreateGame';
import { RoomList } from '../screens/RoomList';
import { RoomGenerator } from '../screens/RoomGenerator';
import { Generator_1 } from '../screens/Generator_1';
import { Generator_2 } from '../screens/Generator_2';
import { Generator_3 } from '../screens/Generator_3';
import { Generator_4 } from '../screens/Generator_4';

export const MainStackNavigator = ({ navigation, route }) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="GameList">
            <Stack.Screen
                name="GameList"
                component={GameList}
                options={() => ({
                    title: 'Games',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#28587B' },
                    headerBackTitle: 'Cancel',
                })}
            />
            <Stack.Screen
                name="CreateGame"
                component={CreateGame}
                options={() => ({
                    title: 'Create',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#28587B' },
                    headerBackTitle: 'Cancel',
                })}
            />
            <Stack.Screen
                name="RoomList"
                component={RoomList}
                options={{
                    title: 'Rooms',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#28587B' },
                }}
            />
            <Stack.Screen
                name="RoomGenerator"
                component={RoomGenerator}
                options={{
                    title: 'Room',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#28587B' },
                }}
            />
            <Stack.Screen
                name="Generator_1"
                component={Generator_1}
                options={() => ({
                    title: 'Generator',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#28587B' },
                    headerBackTitle: 'Cancel',
                })}
            />
            <Stack.Screen
                name="Generator_2"
                component={Generator_2}
                options={() => ({
                    title: 'Generator',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#28587B' },
                    headerBackTitle: 'Cancel',
                })}
            />
            <Stack.Screen
                name="Generator_3"
                component={Generator_3}
                options={() => ({
                    title: 'Generator',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#28587B' },
                    headerBackTitle: 'Cancel',
                })}
            />
            <Stack.Screen
                name="Generator_4"
                component={Generator_4}
                options={() => ({
                    title: 'Generator',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#28587B' },
                    headerBackTitle: 'Cancel',
                })}
            />
        </Stack.Navigator>
    );
};
