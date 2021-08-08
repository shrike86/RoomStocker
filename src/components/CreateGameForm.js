import React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { TextInput, Button, Text } from 'react-native-paper';

const FormContainer = styled.View``;

export const CreateGameForm = ({ name, setName, description, setDescription }) => {
    return (
        <FormContainer>
            <TextInput label="Name" mode="outlined" theme={{ colors: { primary: '#28587B' } }} value={name} onChangeText={(name) => setName(name)}></TextInput>
            <TextInput
                label="Description"
                mode="outlined"
                multiline={true}
                theme={{ colors: { primary: '#28587B' } }}
                value={description}
                onChangeText={(description) => setDescription(description)}
            ></TextInput>
        </FormContainer>
    );
};
