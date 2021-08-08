import React from 'react';
import styled from 'styled-components/native';

import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Title, Text, Button } from 'react-native-paper';
import { getDangerousInhabitant_1, getDangerousInhabitant_2, getDangerousInhabitant_3, getDangerousInhabitant_4 } from '../services/DataService';

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
    padding-top: ${(props) => props.theme.space[4]};
    padding-right: ${(props) => props.theme.space[4]};
`;

//#endregion

export const Generator_4 = ({ navigation, route }) => {
    const [newValue_1, setNewValue_1] = useState('');
    const [newValue_2, setNewValue_2] = useState('');
    const [newValue_3, setNewValue_3] = useState('');
    const [newValue_4, setNewValue_4] = useState('');
    const [isSave, setIsSave] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [existingValue_1, setExistingValue_1] = useState('');
    const [existingValue_2, setExistingValue_2] = useState('');
    const [existingValue_3, setExistingValue_3] = useState('');
    const [existingValue_4, setExistingValue_4] = useState('');

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
            setExistingValue_3(route.params.generatedValue[2]);
            setExistingValue_3(route.params.generatedValue[3]);
            setIsEditing(true);
        }
    }, [route.params]);

    useEffect(() => {
        if (isSave) {
            if (isEditing || (!isEditing && newValue_1 !== '' && newValue_2 !== '' && newValue_3 !== '' && newValue_4 !== '')) {
                let value = '';

                if (route.params.type === 'Dangerous Inhabitant') {
                    value = `The dangerous inhabitant is a ${newValue_1 === '' ? existingValue_1 : newValue_1}, ${newValue_2 === '' ? existingValue_2 : newValue_2}, ${
                        newValue_3 === '' ? existingValue_3 : newValue_3
                    }, ${newValue_4 === '' ? existingValue_4 : newValue_4}`;
                }

                route.params.setRoomObject.setRoomObject(route.params.type, [
                    newValue_1 === '' ? existingValue_1 : newValue_1,
                    newValue_2 === '' ? existingValue_2 : newValue_2,
                    newValue_3 === '' ? existingValue_3 : newValue_3,
                    newValue_4 === '' ? existingValue_4 : newValue_4,
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
                        let newValue_1 = getDangerousInhabitant_1();

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
                        let newValue_2 = getDangerousInhabitant_2();

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
            <GeneratorValue>{existingValue_3 === undefined ? newValue_3 : existingValue_3}</GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        let newValue_3 = getDangerousInhabitant_3();

                        if (existingValue_3 !== undefined) {
                            setExistingValue_3(newValue_3);
                        }

                        // Always set new Value.
                        setNewValue_3(newValue_3);
                    }}
                >
                    Generate
                </GeneratorButton>
            </ButtonContainer>
            <GeneratorValue>{existingValue_4 === undefined ? newValue_4 : existingValue_4}</GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        let newValue_4 = getDangerousInhabitant_4();

                        if (existingValue_4 !== undefined) {
                            setExistingValue_4(newValue_4);
                        }

                        // Always set new Value.
                        setNewValue_4(newValue_4);
                    }}
                >
                    Generate
                </GeneratorButton>
            </ButtonContainer>
        </GeneratorContainer>
    );
};
