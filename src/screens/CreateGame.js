import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { Button, FAB } from 'react-native-paper';
import { CreateGameForm } from '../components/CreateGameForm';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { View, StyleSheet, ScrollView } from 'react-native';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.colours.bg.primary};
`;

export const CreateGame = ({ navigation, route }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState('');
    const [isEditingGame, setIsEditingGame] = useState(false);
    const [editingGuid, setEditingGuid] = useState(false);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            // headerRight: () => (
            //     <Button
            //         mode="text"
            //         dark="false"
            //         color="#fff"
            //         icon="content-save"
            //         uppercase="false"
            //         onPress={() => {
            //             navigation.navigate('GameList', {
            //                 game: {
            //                     gameId: !isEditingGame ? uuidv4() : editingGuid,
            //                     name: name,
            //                     description: description,
            //                     locations: [],
            //                     notes: notes,
            //                 },
            //                 navigatingFrom: 'CreateGame',
            //                 action: 'Save',
            //             });
            //         }}
            //     >
            //         Save
            //     </Button>
            // ),
            headerLeft: () => (
                <Button
                    mode="text"
                    dark="false"
                    color="#fff"
                    icon="keyboard-backspace"
                    uppercase="false"
                    onPress={() => {
                        navigation.navigate('GameList', {
                            navigatingFrom: 'CreateGame',
                            action: 'Cancel',
                        });
                    }}
                >
                    Cancel
                </Button>
            ),
        });
    });

    // Set editing status and editing guid.
    useEffect(() => {
        if (route.params.navigatingFrom === 'GameList' && route.params.action == 'Edit') {
            setIsEditingGame(true);
            setEditingGuid(route.params.game.gameId);
            setName(route.params.game.name);
            setDescription(route.params.game.description);
            setNotes(route.params.game.notes);
        } else {
            setIsEditingGame(false);
        }
    }, [isEditingGame]);

    const styles = StyleSheet.create({
        fab: {
            position: 'absolute',
            margin: 30,
            right: 0,
            bottom: 20,
        },
    });

    return (
        <Container>
            <ScrollView>
                <CreateGameForm name={name} setName={setName} description={description} setDescription={setDescription} notes={notes} setNotes={setNotes} />
            </ScrollView>
            <FAB
                color="#FFFFFF"
                style={styles.fab}
                icon="content-save"
                label="Save"
                theme={{ colors: { primary: '#FFFFFF', background: '#28587B', accent: '#28587B' } }}
                onPress={() => {
                    navigation.navigate('GameList', {
                        game: {
                            gameId: !isEditingGame ? uuidv4() : editingGuid,
                            name: name,
                            description: description,
                            locations: [],
                            notes: notes,
                        },
                        navigatingFrom: 'CreateGame',
                        action: 'Save',
                    });
                }}
            />
        </Container>
    );
};
