import * as React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Button } from 'react-native-paper';

import { GameSection } from '../components/GameSection';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.colours.bg.primary};
`;

export const GameList = ({ navigation, route }) => {
    const [games, setGames] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [saveToStorage, setSaveToStorage] = useState(false);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    mode="text"
                    dark="false"
                    color="#fff"
                    icon="plus"
                    uppercase="false"
                    onPress={() => {
                        navigation.navigate('CreateGame', {
                            navigatingFrom: 'GameList',
                            Action: 'Create',
                        });
                    }}
                >
                    Create
                </Button>
            ),
        });
    }, [navigation]);

    const createGame = (game) => {
        let tempGames = [...games];
        tempGames.push(game);
        setGames(tempGames);
    };

    const updateGames = (game, locations) => {
        for (let index in games) {
            if (games[index] !== undefined && games[index].gameId === game.gameId) {
                if (locations) {
                    games[index].locations = locations;
                } else {
                    games[index] = game;
                }
                setGames([...games]);
                return true;
            }
        }
    };

    const deleteGame = (game) => {
        for (let index in games) {
            if (games[index] !== undefined && games[index].gameId === game.gameId) {
                games.splice(index, 1);
                setGames([...games]);
                setSaveToStorage(true);
            }
        }
    };

    const saveGamesToStorage = async (value) => {
        try {
            let json = JSON.stringify(value);
            //console.log('Save to storage: ' + json);
            await AsyncStorage.setItem('stockerKey', json);
            setSaveToStorage(false);
        } catch (e) {}
    };

    const loadGamesFromStorage = async () => {
        try {
            const value = await AsyncStorage.getItem('stockerKey');
            const json = JSON.parse(value);
            //console.log('Loaded from storage: ' + returnValue);
            setGames(json);
        } catch (e) {
            // error reading value
        }
    };

    useEffect(() => {
        if (!isDataLoaded) {
            loadGamesFromStorage();
            setIsDataLoaded(true);
        }
    }, [isDataLoaded]);

    const GameItem = ({ game, navigation }) => <GameSection game={game} navigation={navigation} deleteFunc={deleteGame} />;

    const renderItem = ({ item }) => <GameItem game={item} navigation={navigation} />;

    useEffect(() => {
        if (saveToStorage) {
            saveGamesToStorage(games);
        }
    }, [saveToStorage]);

    useEffect(() => {
        if (route.params) {
            if (route.params.navigatingFrom == 'LocationList' && route.params.action == 'Save') {
                if (route.params.locations !== undefined || route.params.locations !== []) {
                    updateGames(route.params.game, route.params.locations);
                }
            }

            if (route.params.navigatingFrom == 'CreateGame' && route.params.action == 'Save') {
                if (!updateGames(route.params.game)) {
                    createGame(route.params.game);
                }
            }

            setSaveToStorage(true);
        }
    }, [route.params]);

    return (
        <Container>
            <FlatList data={games} renderItem={renderItem} keyExtractor={(item, index) => item + index} />
        </Container>
    );
};
