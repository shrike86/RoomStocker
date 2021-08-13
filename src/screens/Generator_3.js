import React from 'react';
import styled from 'styled-components/native';

import { useState, useEffect } from 'react';
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

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

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

export const Generator_3 = ({ navigation, route }) => {
    const [value_1, setValue_1] = useState('');
    const [value_2, setValue_2] = useState('');
    const [value_3, setValue_3] = useState('');
    const [isSave, setIsSave] = useState(false);
    const [isEditingLocation, setIsEditingLocation] = useState(false);
    const [editingGuid, setEditingGuid] = useState('');

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
                        if (route.params.navigatingFrom === 'RoomGenerator') {
                            navigation.navigate('RoomGenerator', {
                                navigatingFrom: 'Generator',
                                action: 'Cancel',
                            });
                        } else if (route.params.navigatingFrom === 'LocationList') {
                            navigation.navigate('LocationList', {
                                navigatingFrom: 'Generator',
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
        if (route.params.navigatingFrom === 'LocationList' && route.params.action == 'Edit') {
            setIsEditingLocation(true);
            setEditingGuid(route.params.location.locationId);
        }
    });

    useEffect(() => {
        if (route.params.navigatingFrom === 'RoomGenerator') {
            setValue_1(route.params.roomObject.generatedValue_1);
            setValue_2(route.params.roomObject.generatedValue_2);
            setValue_3(route.params.roomObject.generatedValue_3);
        } else if (route.params.navigatingFrom === 'LocationList' && route.params.action === 'Edit') {
            setValue_1(route.params.location.locationObject.generatedValue_1);
            setValue_2(route.params.location.locationObject.generatedValue_2);
            setValue_3(route.params.location.locationObject.generatedValue_3);
        }
    }, [route.params]);

    useEffect(() => {
        if (isSave) {
            let concatValue = '';
            // Set the concatenated string value based on the type.
            if (route.params.type === 'Prominent Room Ornamentations') {
                concatValue = `${value_1} that are ${value_2.toLowerCase()} and ${value_3.toLowerCase()}`;
            } else if (route.params.type === 'Place') {
                concatValue = `${value_1} ${value_2} ${value_3}`;
            } else if (route.params.type === 'Neutral Inhabitant') {
                concatValue = `The neutral inhabitant is a ${value_1}, ${value_2.toLowerCase()}, ${value_3.toLowerCase()}`;
            } else if (route.params.type === 'Traps') {
                concatValue = `The traps here: ${value_1} and they target the victim's ${value_2} with ${value_3}`;
            } else if (route.params.type === 'Treasure') {
                concatValue = `The treasure in the room is a: ${value_1}, ${value_2}, ${value_3}`;
            }

            if (route.params.navigatingFrom === 'RoomGenerator') {
                navigation.navigate('RoomGenerator', {
                    navigatingFrom: 'Generator',
                    action: 'Save',
                    type: route.params.type,
                    roomObject: {
                        generatedValue_1: value_1,
                        generatedValue_2: value_2,
                        generatedValue_3: value_3,
                        generatedValue_4: '',
                        displayValue: concatValue,
                        isAssigned: true,
                    },
                });
            } else if (route.params.navigatingFrom === 'LocationList') {
                navigation.navigate('LocationList', {
                    navigatingFrom: 'Generator',
                    action: 'Save',
                    type: route.params.type,
                    location: {
                        locationObject: {
                            generatedValue_1: value_1,
                            generatedValue_2: value_2,
                            generatedValue_3: value_3,
                            generatedValue_4: '',
                            displayValue: concatValue,
                            isAssigned: true,
                        },
                        locationId: !isEditingLocation ? uuidv4() : editingGuid,
                        rooms: [],
                        notes: '',
                    },
                });
            }
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
                        if (route.params.type === 'Place') {
                            setValue_1(getPlace_1());
                        } else if (route.params.type === 'Prominent Room Ornamentations') {
                            setValue_1(getOrnamentations_1());
                        } else if (route.params.type === 'Neutral Inhabitant') {
                            setValue_1(getNeutralInhabitant_1());
                        } else if (route.params.type === 'Traps') {
                            setValue_1(getTraps_1());
                        } else if (route.params.type === 'Treasure') {
                            setValue_1(getTreasure_1());
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
                        if (route.params.type === 'Place') {
                            setValue_2(getPlace_2());
                        } else if (route.params.type === 'Prominent Room Ornamentations') {
                            setValue_2(getOrnamentations_2());
                        } else if (route.params.type === 'Neutral Inhabitant') {
                            setValue_2(getNeutralInhabitant_2());
                        } else if (route.params.type === 'Traps') {
                            setValue_2(getTraps_2());
                        } else if (route.params.type === 'Treasure') {
                            setValue_2(getTreasure_2());
                        }
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
                        if (route.params.type === 'Place') {
                            setValue_3(getPlace_3());
                        } else if (route.params.type === 'Prominent Room Ornamentations') {
                            setValue_3(getOrnamentations_3());
                        } else if (route.params.type === 'Neutral Inhabitant') {
                            setValue_3(getNeutralInhabitant_3());
                        } else if (route.params.type === 'Traps') {
                            setValue_3(getTraps_3());
                        } else if (route.params.type === 'Treasure') {
                            setValue_3(getTreasure_3());
                        }
                    }}
                >
                    Generate
                </GeneratorButton>
            </ButtonContainer>
        </GeneratorContainer>
    );
};
