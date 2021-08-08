import * as React from 'react';
import styled from 'styled-components/native';

import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Button } from 'react-native-paper';

import { GameSection } from '../components/GameSection';

const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 10px;
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
                        navigation.navigate('CreateGame');
                    }}
                >
                    Create
                </Button>
            ),
        });
    }, [navigation]);

    const createGamme = (game) => {
        let tempGames = [...games];
        tempGames.push(game);
        setGames(tempGames);
    };

    const updateGame = (game) => {
        for (let index in games) {
            if (games[index] !== undefined && games[index].gameId === game.gameId) {
                games[index] = game;
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
            if (!updateGame(route.params.game)) {
                createGamme(route.params.game);
            }
        }
    }, [route.params]);

    return (
        <Container>
            <FlatList data={games} renderItem={renderItem} keyExtractor={(item, index) => item + index} />
        </Container>
    );
};
