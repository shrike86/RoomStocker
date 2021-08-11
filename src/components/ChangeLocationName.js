import * as React from 'react';
import styled from 'styled-components/native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useState, useEffect } from 'react';

const FormContainer = styled.View`
    padding-top: ${(props) => props.theme.space[2]};
    padding-right: ${(props) => props.theme.space[3]};
    padding-left: ${(props) => props.theme.space[3]};
`;

export const ChangeLocationName = ({ navigation, route }) => {
    const [name, setName] = useState(route.params.room.name);
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
                        navigation.navigate('RoomList', {
                            navigatingFrom: 'ChangeLocationName',
                            action: 'Cancel',
                        });
                    }}
                >
                    Cancel
                </Button>
            ),
        });
    }, [navigation]);

    React.useEffect(() => {
        if (isSave) {
            route.params.updateNameFunc(route.params.room, name);
            navigation.navigate('RoomList', {
                navigatingFrom: 'ChangeLocationName',
                action: 'Save',
            });
        }
    }, [isSave]);

    return (
        <FormContainer>
            <TextInput label="Location Name" mode="outlined" theme={{ colors: { primary: '#28587B' } }} value={name} onChangeText={(newName) => setName(newName)}></TextInput>
        </FormContainer>
    );
};
