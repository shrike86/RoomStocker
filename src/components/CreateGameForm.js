import React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { TextInput, Button, Text } from 'react-native-paper';

const FormContainer = styled.View`
    padding-top: ${(props) => props.theme.space[2]};
    padding-right: ${(props) => props.theme.space[3]};
    padding-left: ${(props) => props.theme.space[3]};
`;

export const CreateGameForm = ({ name, setName, description, setDescription, notes, setNotes }) => {
    return (
        <FormContainer>
            <TextInput label="Name" mode="outlined" theme={{ colors: { primary: '#28587B' } }} value={name} onChangeText={(newName) => setName(newName)}></TextInput>
            <TextInput
                label="Description"
                mode="outlined"
                multiline={true}
                theme={{ colors: { primary: '#28587B' } }}
                value={description}
                onChangeText={(description) => setDescription(description)}
            ></TextInput>
            <TextInput
                label="Notes"
                mode="outlined"
                multiline={true}
                theme={{ colors: { primary: '#28587B' } }}
                value={notes}
                onChangeText={(newNote) => setNotes(newNote)}
            ></TextInput>
        </FormContainer>
    );
};
