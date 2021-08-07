import 'react-native-gesture-handler';
import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';
import { LogBox } from 'react-native';

import { Generator_1 } from './src/components/Generator_1';
import { Generator_2 } from './src/components/Generator_2';
import { Generator_3 } from './src/components/Generator_3';
import { Generator_4 } from './src/components/Generator_4';

import { RoomGenerator } from './src/features/room-generator/RoomGenerator';
import { RoomList } from './src/features/room-list/RoomList';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    useFonts as useOswald,
    Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

const Stack = createStackNavigator();

const App = () => {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });

    const [LatoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !LatoLoaded) {
        return null;
    }

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ]);

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="RoomList">
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
                            title: 'Generic Room Stocker',
                            headerTintColor: '#fff',
                            headerStyle: { backgroundColor: '#28587B' },
                        }}
                    />
                    <Stack.Screen
                        name="Generator_1"
                        component={Generator_1}
                        options={({ route }) => ({
                            title: 'Generator',
                            headerTintColor: '#fff',
                            headerStyle: { backgroundColor: '#28587B' },
                            headerBackTitle: 'Cancel',
                        })}
                    />
                    <Stack.Screen
                        name="Generator_2"
                        component={Generator_2}
                        options={({ route }) => ({
                            title: 'Generator',
                            headerTintColor: '#fff',
                            headerStyle: { backgroundColor: '#28587B' },
                            headerBackTitle: 'Cancel',
                        })}
                    />
                    <Stack.Screen
                        name="Generator_3"
                        component={Generator_3}
                        options={({ route }) => ({
                            title: 'Generator',
                            headerTintColor: '#fff',
                            headerStyle: { backgroundColor: '#28587B' },
                            headerBackTitle: 'Cancel',
                        })}
                    />
                    <Stack.Screen
                        name="Generator_4"
                        component={Generator_4}
                        options={({ route }) => ({
                            title: 'Generator',
                            headerTintColor: '#fff',
                            headerStyle: { backgroundColor: '#28587B' },
                            headerBackTitle: 'Cancel',
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
