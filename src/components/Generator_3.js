import React from 'react';
import styled from 'styled-components/native';

import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Title, Text, Button } from 'react-native-paper';
import {
    getPlace_1,
    getPlace_2,
    getPlace_3,
    getOrnamentations_1,
    getOrnamentations_2,
    getOrnamentations_3,
    getNeutralInhabitant_1,
    getNeutralInhabitant_2,
    getNeutralInhabitant_3,
    getTraps_1,
    getTraps_2,
    getTraps_3,
    getTreasure_1,
    getTreasure_2,
    getTreasure_3,
} from '../services/DataService';

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
`;

const GeneratorValue = styled(Text)`
    padding-left: ${(props) => props.theme.space[4]};
    padding-top: ${(props) => props.theme.space[4]};
`;

const HeaderRightButtonText = styled.Text`
    color: white;
    font-size: ${(props) => props.theme.fontSizes.title};
    padding-right: ${(props) => props.theme.space[4]};
`;

//#endregion

export const Generator_3 = ({ navigation, route }) => {
    const [newValue_1, setNewValue_1] = useState('');
    const [newValue_2, setNewValue_2] = useState('');
    const [newValue_3, setNewValue_3] = useState('');
    const [isSave, setIsSave] = useState(false);

    const [existingValue_1, setExistingValue_1] = useState(
        route.params.generatedValue[0]
    );
    const [existingValue_2, setExistingValue_2] = useState(
        route.params.generatedValue[1]
    );
    const [existingValue_3, setExistingValue_3] = useState(
        route.params.generatedValue[2]
    );

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

            if (route.params.type === 'Prominent Room Ornamentations') {
                value = `The prominent ornamentations in the room are ${
                    newValue_1 === '' ? existingValue_1 : newValue_1
                } that are ${
                    newValue_2 === '' ? existingValue_2 : newValue_2
                } and ${newValue_3 === '' ? existingValue_3 : newValue_3}`;
            } else if (route.params.type === 'Place') {
                value = `${newValue_1 === '' ? existingValue_1 : newValue_1} ${
                    newValue_2 === '' ? existingValue_2 : newValue_2
                } ${newValue_3 === '' ? existingValue_3 : newValue_3}`;
            } else if (route.params.type === 'Neutral Inhabitant') {
                value = `There is a neutral inhabitant in the room who appears to be a ${
                    newValue_1 === '' ? existingValue_1 : newValue_1
                }, ${newValue_2 === '' ? existingValue_2 : newValue_2}, ${
                    newValue_3 === '' ? existingValue_3 : newValue_3
                }`;
            } else if (route.params.type === 'Traps') {
                value = `The traps in the room ${
                    newValue_1 === '' ? existingValue_1 : newValue_1
                } and they target the victim's ${
                    newValue_2 === '' ? existingValue_2 : newValue_2
                } with ${newValue_3 === '' ? existingValue_3 : newValue_3}`;
            } else if (route.params.type === 'Treasure') {
                value = `The treasure in the room is a ${
                    newValue_1 === '' ? existingValue_1 : newValue_1
                }, ${newValue_2 === '' ? existingValue_2 : newValue_2}, ${
                    newValue_3 === '' ? existingValue_3 : newValue_3
                }`;
            }

            route.params.setRoomObject.setRoomObject(route.params.type, [
                newValue_1 === '' ? existingValue_1 : newValue_1,
                newValue_2 === '' ? existingValue_2 : newValue_2,
                newValue_3 === '' ? existingValue_3 : newValue_3,
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

                        if (route.params.type === 'Place') {
                            newValue_1 = getPlace_1();
                        } else if (
                            route.params.type ===
                            'Prominent Room Ornamentations'
                        ) {
                            newValue_1 = getOrnamentations_1();
                        } else if (route.params.type === 'Neutral Inhabitant') {
                            newValue_1 = getNeutralInhabitant_1();
                        } else if (route.params.type === 'Traps') {
                            newValue_1 = getTraps_1();
                        } else if (route.params.type === 'Treasure') {
                            newValue_1 = getTreasure_1();
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
            <GeneratorValue>
                {existingValue_2 === undefined ? newValue_2 : existingValue_2}
            </GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        let newValue_2 = '';

                        if (route.params.type === 'Place') {
                            newValue_2 = getPlace_2();
                        } else if (
                            route.params.type ===
                            'Prominent Room Ornamentations'
                        ) {
                            newValue_2 = getOrnamentations_2();
                        } else if (route.params.type === 'Neutral Inhabitant') {
                            newValue_2 = getNeutralInhabitant_2();
                        } else if (route.params.type === 'Traps') {
                            newValue_2 = getTraps_2();
                        } else if (route.params.type === 'Treasure') {
                            newValue_2 = getTreasure_2();
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
            <GeneratorValue>
                {existingValue_3 === undefined ? newValue_3 : existingValue_3}
            </GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        let newValue_3 = '';

                        if (route.params.type == 'Place') {
                            newValue_3 = getPlace_3();
                        } else if (
                            route.params.type == 'Prominent Room Ornamentations'
                        ) {
                            newValue_3 = getOrnamentations_3();
                        } else if (route.params.type === 'Neutral Inhabitant') {
                            newValue_3 = getNeutralInhabitant_3();
                        } else if (route.params.type === 'Traps') {
                            newValue_3 = getTraps_3();
                        } else if (route.params.type === 'Treasure') {
                            newValue_3 = getTreasure_3();
                        }

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
        </GeneratorContainer>
    );
};
