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
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-family: ${(props) => props.theme.fonts.heading};
`;

const GeneratorValue = styled(Text)`
    padding-left: ${(props) => props.theme.space[4]};
    padding-right: ${(props) => props.theme.space[4]};
    padding-top: ${(props) => props.theme.space[4]};
    font-size: ${(props) => props.theme.fontSizes.body};
    font-family: ${(props) => props.theme.fonts.heading};
`;

//#endregion

export const Generator_2 = ({ navigation, route }) => {
    const [value_1, setValue_1] = useState('');
    const [value_2, setValue_2] = useState('');
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
                        navigation.navigate('RoomGenerator', {
                            navigatingFrom: 'RoomGenerator',
                            action: 'Cancel',
                        });
                    }}
                >
                    Cancel
                </Button>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        setValue_1(route.params.roomObject.generatedValue_1);
        setValue_2(route.params.roomObject.generatedValue_2);
    }, [route.params]);

    useEffect(() => {
        if (isSave) {
            let concatValue = '';
            // Set the concatenated string value based on the type.
            if (route.params.type === 'Inhabitant Reaction to Interlopers') {
                concatValue = `Mood: ${value_1}.\nAction: ${value_2}`;
            } else if (route.params.type === 'Device') {
                concatValue = `The device's action: ${value_1} \nThe device's operation: ${value_2}`;
            }

            navigation.navigate('RoomGenerator', {
                navigatingFrom: 'Generator',
                action: 'Save',
                type: route.params.type,
                roomObject: {
                    generatedValue_1: value_1,
                    generatedValue_2: value_2,
                    generatedValue_3: '',
                    generatedValue_4: '',
                    displayValue: concatValue,
                    isAssigned: true,
                },
            });
        }
    }, [isSave]);

    return (
        <GeneratorContainer>
            <GeneratorTitle>{route.params.type}</GeneratorTitle>
            <GeneratorValue>{value_1}</GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        if (route.params.type === 'Inhabitant Reaction to Interlopers') {
                            setValue_1(getInhabitantReaction_1());
                        } else if (route.params.type === 'Device') {
                            setValue_1(getDevice_1());
                        }
                    }}
                >
                    Generate
                </GeneratorButton>
            </ButtonContainer>
            <GeneratorValue>{value_2}</GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        if (route.params.type === 'Inhabitant Reaction to Interlopers') {
                            setValue_2(getInhabitantReaction_2());
                        } else if (route.params.type === 'Device') {
                            setValue_2(getDevice_2());
                        }
                    }}
                >
                    Generate
                </GeneratorButton>
            </ButtonContainer>
        </GeneratorContainer>
    );
};
