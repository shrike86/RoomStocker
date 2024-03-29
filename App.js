import 'react-native-gesture-handler';
import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/index';
import { Provider as PaperProvider } from 'react-native-paper';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AboutStackNavigator } from './src/components/AboutStackNavigator';
import { MainStackNavigator } from './src/components/MainStackNavigator';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

const Tab = createBottomTabNavigator();

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

    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    return (
        <PaperProvider>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <StatusBar style="light" />
                    <Tab.Navigator
                        initialRouteName="GameList"
                        screenOptions={({ route }) => ({
                            headerShown: false,
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Games') {
                                    iconName = 'list';
                                } else if (route.name === 'About') {
                                    iconName = 'information-circle-outline';
                                }

                                // You can return any component that you like here!
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                            tabBarActiveTintColor: theme.colours.ui.primary,
                            tabBarInactiveTintColor: 'gray',
                        })}
                    >
                        <Tab.Screen name="Games" component={MainStackNavigator} />
                        <Tab.Screen name="About" component={AboutStackNavigator} />
                    </Tab.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        </PaperProvider>
    );
};

export default App;
