import * as React from 'react';
import styled from 'styled-components/native';

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

    const updateGames = (game, rooms) => {
        for (let index in games) {
            if (games[index] !== undefined && games[index].gameId === game.gameId) {
                if (rooms) {
                    games[index].rooms = rooms;
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
            }
        }
    };

    const GameItem = ({ game, navigation }) => <GameSection game={game} navigation={navigation} deleteFunc={deleteGame} />;

    const renderItem = ({ item }) => <GameItem game={item} navigation={navigation} />;

    useEffect(() => {
        if (route.params) {
            if (route.params.navigatingFrom == 'RoomList' && route.params.action == 'Save') {
                if (route.params.rooms !== undefined || route.params.rooms !== []) {
                    updateGames(route.params.game, route.params.rooms);
                }
            }

            if (route.params.navigatingFrom == 'CreateGame' && route.params.action == 'Save') {
                if (!updateGames(route.params.game)) {
                    createGame(route.params.game);
                }
            }
        }
    }, [route.params]);

    return (
        <Container>
            <FlatList data={games} renderItem={renderItem} keyExtractor={(item, index) => item + index} />
        </Container>
    );
};
