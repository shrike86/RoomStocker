import * as React from 'react';
import styled from 'styled-components/native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useState, useEffect } from 'react';

const FormContainer = styled.View`
    padding-top: ${(props) => props.theme.space[2]};
    padding-right: ${(props) => props.theme.space[3]};
    padding-left: ${(props) => props.theme.space[3]};
`;

export const CreateNoteForm = ({ navigation, route }) => {
    const [note, setNote] = useState('');
    const [isSave, setIsSave] = useState(false);

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
                        if (route.params.navigatingFrom === 'RoomList' && route.params.action === 'Edit') {
                            navigation.navigate('RoomList', {
                                navigatingFrom: 'CreateNoteForm',
                                action: 'Cancel',
                            });
                        } else if (route.params.navigatingFrom === 'LocationList' && route.params.action === 'Edit') {
                            navigation.navigate('LocationList', {
                                navigatingFrom: 'CreateNoteForm',
                                action: 'Cancel',
                            });
                        }
                    }}
                >
                    Cancel
                </Button>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        if (isSave) {
            if (route.params.navigatingFrom === 'RoomList' && route.params.action === 'Edit') {
                navigation.navigate('RoomList', {
                    navigatingFrom: 'CreateNoteForm',
                    room: route.params.room,
                    action: 'Save',
                    note: note,
                });
            } else if (route.params.navigatingFrom === 'LocationList' && route.params.action === 'Edit') {
                navigation.navigate('LocationList', {
                    navigatingFrom: 'CreateNoteForm',
                    location: route.params.location,
                    action: 'Save',
                    note: note,
                });
            }
        }
    }, [isSave]);

    useEffect(() => {
        if (route.params.navigatingFrom === 'RoomList' && route.params.action === 'Edit') {
            setNote(route.params.room.notes);
        } else if (route.params.navigatingFrom === 'LocationList' && route.params.action === 'Edit') {
            setNote(route.params.location.notes);
        }
    }, [route.params]);

    return (
        <FormContainer>
            <TextInput
                label="Location Note"
                mode="outlined"
                multiline={true}
                theme={{ colors: { primary: '#28587B' } }}
                value={note}
                onChangeText={(newNote) => setNote(newNote)}
            ></TextInput>
        </FormContainer>
    );
};
