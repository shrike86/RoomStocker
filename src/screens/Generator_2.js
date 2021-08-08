import React from 'react';
import styled from 'styled-components/native';

import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Title, Text, Button } from 'react-native-paper';
import { getInhabitantReaction_1, getInhabitantReaction_2, getDevice_1, getDevice_2 } from '../services/DataService';

//#region Styles

const GeneratorContainer = styled.View`
    flex: 8;
    background-color: ${(props) => props.theme.colours.bg.primary};
`;

const ButtonContainer = styled.View`
    margin-left: ${(props) => props.theme.space[4]};
`;

const GeneratorButton = styled(Button)`
    margin-top: ${(props) => props.theme.space[4]};
    width: 120px;
`;

const GeneratorTitle = styled(Title)`
    padding-top: ${(props) => props.theme.space[3]};
    margin-bottom: ${(props) => props.theme.space[3]};
    text-align: center;
    padding-left: ${(props) => props.theme.space[3]};
`;

const GeneratorValue = styled(Text)`
    padding-left: ${(props) => props.theme.space[4]};
    padding-right: ${(props) => props.theme.space[4]};
    padding-top: ${(props) => props.theme.space[4]};
`;

//#endregion

export const Generator_2 = ({ navigation, route }) => {
    const [newValue_1, setNewValue_1] = useState('');
    const [newValue_2, setNewValue_2] = useState('');
    const [isSave, setIsSave] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [existingValue_1, setExistingValue_1] = useState('');
    const [existingValue_2, setExistingValue_2] = useState('');

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
                        navigation.navigate('RoomGenerator');
                    }}
                >
                    Cancel
                </Button>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        if (route.params.generatedValue) {
            setExistingValue_1(route.params.generatedValue[0]);
            setExistingValue_2(route.params.generatedValue[1]);
            setIsEditing(true);
        }
    }, [route.params]);

    useEffect(() => {
        if (isSave) {
            if (isEditing || (!isEditing && newValue_1 !== '' && newValue_2 !== '')) {
                let value = '';

                if (route.params.type === 'Inhabitant Reaction to Interlopers') {
                    value = `Mood: ${newValue_1 === '' ? existingValue_1 : newValue_1}.\nAction: ${newValue_2 === '' ? existingValue_2 : newValue_2}`;
                } else if (route.params.type === 'Device') {
                    value = `The device's action: ${newValue_1 === '' ? existingValue_1 : newValue_1} \nThe device's operation: ${
                        newValue_2 === '' ? existingValue_2 : newValue_2
                    }`;
                }

                route.params.setRoomObject.setRoomObject(route.params.type, [
                    newValue_1 === '' ? existingValue_1 : newValue_1,
                    newValue_2 === '' ? existingValue_2 : newValue_2,
                    '',
                    '',
                    value,
                    true,
                ]);
                navigation.navigate('RoomGenerator');
            } else {
                navigation.navigate('RoomGenerator');
            }
        }
    });

    return (
        <GeneratorContainer>
            <GeneratorTitle>{route.params.type}</GeneratorTitle>
            <GeneratorValue>{existingValue_1 !== undefined ? existingValue_1 : newValue_1}</GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        let newValue_1 = '';

                        if (route.params.type === 'Inhabitant Reaction to Interlopers') {
                            newValue_1 = getInhabitantReaction_1();
                        } else if (route.params.type === 'Device') {
                            newValue_1 = getDevice_1();
                        }

                        if (existingValue_1 !== undefined) {
                            setExistingValue_1(newValue_1);
                        }

                        // Always set new Value.
                        setNewValue_1(newValue_1);
                    }}
                >
                    Generate
                </GeneratorButton>
            </ButtonContainer>
            <GeneratorValue>{existingValue_2 === undefined ? newValue_2 : existingValue_2}</GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        let newValue_2 = '';

                        if (route.params.type === 'Inhabitant Reaction to Interlopers') {
                            newValue_2 = getInhabitantReaction_2();
                        } else if (route.params.type === 'Device') {
                            newValue_2 = getDevice_2();
                        }

                        if (existingValue_2 !== undefined) {
                            setExistingValue_2(newValue_2);
                        }

                        // Always set new Value.
                        setNewValue_2(newValue_2);
                    }}
                >
                    Generate
                </GeneratorButton>
            </ButtonContainer>
        </GeneratorContainer>
    );
};
