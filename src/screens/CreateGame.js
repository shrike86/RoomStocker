import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { Button } from 'react-native-paper';

import { CreateGameForm } from '../components/CreateGameForm';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: ${(props) => props.theme.space[2]};
    margin-left: ${(props) => props.theme.space[3]};
    margin-right: ${(props) => props.theme.space[3]};
`;

export const CreateGame = ({ navigation, route }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isSave, setIsSave] = useState(false);
    const [isEditingGame, setIsEditingGame] = useState(false);
    const [editingGuid, setEditingGuid] = useState(false);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    mode="text"
                    dark="false"
                    color="#fff"
                    icon="content-save"
                    uppercase="false"
                    onPress={() => {
                        setIsSave(true);
                    }}
                >
                    Save
                </Button>
            ),
            headerLeft: () => (
                <Button
                    mode="text"
                    dark="false"
                    color="#fff"
                    icon="keyboard-backspace"
                    uppercase="false"
                    onPress={() => {
                        navigation.navigate('GameList');
                    }}
                >
                    Cancel
                </Button>
            ),
        });
    });

    // Set editing status and editing guid.
    useEffect(() => {
        if (route.params?.editing) {
            setIsEditingGame(true);
            setEditingGuid(route.params.game.gameId);
        } else {
            setIsEditingGame(false);
        }
    }, [isEditingGame]);

    useEffect(() => {
        if (isSave) {
            navigation.navigate('GameList', {
                game: {
                    gameId: !isEditingGame ? uuidv4() : editingGuid,
                    name: name,
                    description: description,
                },
            });
        }
    });

    // Load the route values when editing.
    useEffect(() => {
        if (route.params) {
            setName(route.params.game.name);
            setDescription(route.params.game.description);
        }
    }, [route.params]);

    return (
        <Container>
            <CreateGameForm name={name} setName={setName} description={description} setDescription={setDescription} />
        </Container>
    );
};
