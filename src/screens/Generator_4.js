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
    const [value_1, setValue_1] = useState('');
    const [value_2, setValue_2] = useState('');
    const [value_3, setValue_3] = useState('');
    const [value_4, setValue_4] = useState('');
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
                            navigatingFrom: 'Generator',
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
        setValue_3(route.params.roomObject.generatedValue_3);
        setValue_4(route.params.roomObject.generatedValue_4);
    }, [route.params]);

    useEffect(() => {
        if (isSave) {
            navigation.navigate('RoomGenerator', {
                navigatingFrom: 'Generator',
                action: 'Save',
                type: route.params.type,
                roomObject: {
                    generatedValue_1: value_1,
                    generatedValue_2: value_2,
                    generatedValue_3: value_3,
                    generatedValue_4: value_4,
                    displayValue: `The dangerous inhabitant is a ${value_1}, ${value_2}, ${value_3}, ${value_4}`,
                    isAssigned: true,
                },
            });
        }
    });

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
                        setValue_1(getDangerousInhabitant_1());
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
                        setValue_2(getDangerousInhabitant_2());
                    }}
                >
                    Generate
                </GeneratorButton>
            </ButtonContainer>
            <GeneratorValue>{value_3}</GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        setValue_3(getDangerousInhabitant_3());
                    }}
                >
                    Generate
                </GeneratorButton>
            </ButtonContainer>
            <GeneratorValue>{value_4}</GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        setValue_4(getDangerousInhabitant_4());
                    }}
                >
                    Generate
                </GeneratorButton>
            </ButtonContainer>
        </GeneratorContainer>
    );
};
