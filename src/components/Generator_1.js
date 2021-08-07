import React from 'react';
import styled from 'styled-components/native';

import { useState, useEffect } from 'react';
import { Title, Text, Button } from 'react-native-paper';

import { getRoomAtmosphere, getRoomStocking } from '../services/DataService';

//#region Styles

const GeneratorContainer = styled.View`
    flex: 1;
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
`;

//#endregion

export const Generator_1 = ({ navigation, route }) => {
    const [newValue_1, setNewValue_1] = useState('');
    const [existingValue_1, setExistingValue_1] = useState(
        route.params.generatedValue && route.params.generatedValue[0]
    );
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
                        setIsSave(true);
                    }}
                >
                    Cancel
                </Button>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        if (isSave) {
            let value = '';
            if (route.params.type == 'Basic Room Stocking') {
                value = `${newValue_1 === '' ? existingValue_1 : newValue_1}`;
            } else if (route.params.type == 'Room Atmosphere') {
                value = `The atmosphere in the room is ${
                    newValue_1 === '' ? existingValue_1 : newValue_1
                }`;
            }

            route.params.setRoomObject.setRoomObject(route.params.type, [
                newValue_1 === '' ? existingValue_1 : newValue_1,
                '',
                '',
                '',
                value,
                true,
            ]);
            navigation.navigate('RoomGenerator');
        }
    });

    return (
        <GeneratorContainer>
            <GeneratorTitle>{route.params.type}</GeneratorTitle>
            <GeneratorValue>
                {existingValue_1 !== undefined ? existingValue_1 : newValue_1}
            </GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        let newValue_1 = '';

                        if (route.params.type == 'Basic Room Stocking') {
                            newValue_1 = getRoomStocking();
                        } else if (route.params.type == 'Room Atmosphere') {
                            newValue_1 = getRoomAtmosphere();
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
        </GeneratorContainer>
    );
};
