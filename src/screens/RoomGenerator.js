import React from 'react';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { SectionList } from 'react-native';
import { GeneratorSection } from '../components/GeneratorSection';
import { Title, Button } from 'react-native-paper';

import { addCardsBasedOnRoomState } from '../services/DataService';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

//#region Styles

export const RoomGeneratorContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.colours.bg.primary};
`;

export const RoomGeneratorTitle = styled(Title)`
    margin: ${(props) => props.theme.space[3]};
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-family: ${(props) => props.theme.fonts.heading};
`;

//#endregion

export const RoomGenerator = ({ navigation, route }) => {
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

    const [isEditingRoom, setIsEditingRoom] = useState(false);
    const [editingGuid, setEditingGuid] = useState('');
    const [isResetStocking, setIsResetStocking] = useState(false);

    // Default room sections.
    const [generatorCards, setGeneratorCards] = useState([
        {
            title: 'Room Location',
            data: ['Place'],
        },
        {
            title: 'Room Stocking',
            data: ['Basic Room Stocking', 'Room Atmosphere', 'Prominent Room Ornamentations', 'Large Items', 'Small Items'],
        },
    ]);

    //#region Init Generator Objects
    const defaultObj = {
        generatedValue_1: '',
        generatedValue_2: '',
        generatedValue_3: '',
        generatedValue_4: '',
        displayValue: '',
        isAssigned: false,
    };

    const [placeObject, setPlaceObject] = useState(defaultObj);

    const [stockingObject, setStockingObject] = useState(defaultObj);

    const [atmosphereObject, setAtmosphereObject] = useState(defaultObj);

    const [ornamentationsObject, setOrnamentationsObject] = useState(defaultObj);

    const [neutralInhabitantObject, setNeutralInhabitantObject] = useState(defaultObj);

    const [dangerousInhabitantObject, setDangerousInhabitantObject] = useState(defaultObj);

    const [inhabitantReactionObject, setInhabitantReactionObject] = useState(defaultObj);

    const [trapsObject, setTrapsObject] = useState(defaultObj);

    const [treasureObject, setTreasureObject] = useState(defaultObj);

    const [deviceObject, setDeviceObject] = useState(defaultObj);

    const [largeItemObject, setLargeItemObject] = useState(defaultObj);

    const [smallItemObject, setSmallItemObject] = useState(defaultObj);

    //#endregion

    //#region Generator Objects Setter and Getters

    const setRoomObject = (type, newRoomObject) => {
        switch (type) {
            case 'Place':
                setPlaceObject(newRoomObject);
                break;
            case 'Basic Room Stocking':
                setStockingObject(newRoomObject);
                addCardsBasedOnRoomState(setGeneratorCards, newRoomObject.displayValue);
                break;
            case 'Room Atmosphere':
                setAtmosphereObject(newRoomObject);
                break;
            case 'Prominent Room Ornamentations':
                setOrnamentationsObject(newRoomObject);
                break;
            case 'Neutral Inhabitant':
                setNeutralInhabitantObject(newRoomObject);
                break;
            case 'Dangerous Inhabitant':
                setDangerousInhabitantObject(newRoomObject);
                break;
            case 'Inhabitant Reaction to Interlopers':
                setInhabitantReactionObject(newRoomObject);
                break;
            case 'Traps':
                setTrapsObject(newRoomObject);
                break;
            case 'Treasure':
                setTreasureObject(newRoomObject);
                break;
            case 'Device':
                setDeviceObject(newRoomObject);
                break;
            case 'Large Items':
                setLargeItemObject(newRoomObject);
                break;
            case 'Small Items':
                setSmallItemObject(newRoomObject);
                break;
        }
    };

    const getRoomObject = (type) => {
        switch (type) {
            case 'Place':
                return placeObject;
            case 'Basic Room Stocking':
                return stockingObject;
            case 'Room Atmosphere':
                return atmosphereObject;
            case 'Prominent Room Ornamentations':
                return ornamentationsObject;
            case 'Neutral Inhabitant':
                return neutralInhabitantObject;
            case 'Dangerous Inhabitant':
                return dangerousInhabitantObject;
            case 'Inhabitant Reaction to Interlopers':
                return inhabitantReactionObject;
            case 'Traps':
                return trapsObject;
            case 'Treasure':
                return treasureObject;
            case 'Device':
                return deviceObject;
            case 'Large Items':
                return largeItemObject;
            case 'Small Items':
                return smallItemObject;
        }
    };

    //#endregion

    const Item = ({ generatorTitle, type, navigation, route, cards, getRoomObject, setRoomObject, setResetStocking }) => (
        <GeneratorSection
            generatorTitle={generatorTitle}
            type={type}
            navigation={navigation}
            route={route}
            cards={cards}
            getRoomObject={getRoomObject}
            setRoomObject={setRoomObject}
            setResetStocking={setResetStocking}
        ></GeneratorSection>
    );

    useEffect(() => {
        if (isSave) {
            navigation.navigate('RoomList', {
                room: {
                    roomId: !isEditingRoom ? uuidv4() : editingGuid,
                    place: placeObject,
                    stocking: stockingObject,
                    atmosphere: atmosphereObject,
                    ornamentation: ornamentationsObject,
                    neutralInhabitant: neutralInhabitantObject,
                    dangerousInhabitant: dangerousInhabitantObject,
                    inhabitantReaction: inhabitantReactionObject,
                    device: deviceObject,
                    trap: trapsObject,
                    treasure: treasureObject,
                    largeItem: largeItemObject,
                    smallItem: smallItemObject,
                },
                navigatingFrom: 'RoomGenerator',
                action: 'Save',
            });
        }
    }, [isSave]);

    useEffect(() => {
        if (route.params.navigatingFrom === 'Generator' && route.params.action == 'Save') {
            setRoomObject(route.params.type, route.params.roomObject);
        }
    }, [route.params]);

    // Clear values for cards that are driven by the current stocking value.
    useEffect(() => {
        if (isResetStocking) {
            setNeutralInhabitantObject(defaultObj);
            setDangerousInhabitantObject(defaultObj);
            setInhabitantReactionObject(defaultObj);
            setTrapsObject(defaultObj);
            setTreasureObject(defaultObj);
            setDeviceObject(defaultObj);
            setIsResetStocking(false);
        }
    }, [isResetStocking]);

    // Load in values when editing.
    useEffect(() => {
        if (route.params.navigatingFrom === 'RoomList' && route.params.action == 'Edit') {
            setIsEditingRoom(true);
            setEditingGuid(route.params.room.roomId);

            // This is the default section state.
            const newCards = [
                {
                    title: 'Room Location',
                    data: ['Place'],
                },
                {
                    title: 'Room Stocking',
                    data: ['Basic Room Stocking', 'Room Atmosphere', 'Prominent Room Ornamentations', 'Large Items', 'Small Items'],
                },
            ];

            // Add cards based on the route params values.
            if (route.params.room.neutralInhabitant.isAssigned || route.params.room.dangerousInhabitant.isAssigned) {
                if (route.params.room.neutralInhabitant.isAssigned) {
                    newCards[1].data.push('Neutral Inhabitant');
                } else if (route.params.room.dangerousInhabitant.isAssigned) {
                    newCards[1].data.push('Dangerous Inhabitant');
                }

                newCards[1].data.push('Inhabitant Reaction to Interlopers');

                if (route.params.room.trap.isAssigned) {
                    newCards[1].data.push('Traps');
                } else if (route.params.room.treasure.isAssigned) {
                    newCards[1].data.push('Treasure');
                } else if (route.params.room.device.isAssigned) {
                    newCards[1].data.push('Device');
                }

                setGeneratorCards([...newCards]);
            } else if (route.params.room.trap.isAssigned) {
                newCards[1].data.push('Traps');
                setGeneratorCards([...newCards]);
            } else if (route.params.room.treasure.isAssigned) {
                newCards[1].data.push('Treasure');
                setGeneratorCards([...newCards]);
            } else if (route.params.room.device.isAssigned) {
                newCards[1].data.push('Device');
                setGeneratorCards([...newCards]);
            }

            // Update cards based on route params.
            setPlaceObject(route.params.room.place);
            setStockingObject(route.params.room.stocking);
            setAtmosphereObject(route.params.room.atmosphere);
            setOrnamentationsObject(route.params.room.ornamentation);
            setLargeItemObject(route.params.room.largeItem);
            setSmallItemObject(route.params.room.smallItem);
            setNeutralInhabitantObject(route.params.room.neutralInhabitant);
            setDangerousInhabitantObject(route.params.room.dangerousInhabitant);
            setInhabitantReactionObject(route.params.room.inhabitantReaction);
            setTrapsObject(route.params.room.trap);
            setTreasureObject(route.params.room.treasure);
            setDeviceObject(route.params.room.device);
        } else if (route.params.navigatingFrom === 'RoomList' && route.params.action == 'Create') {
            setIsEditingRoom(false);
        }
    }, [route.params]);

    return (
        <RoomGeneratorContainer>
            <SectionList
                sections={generatorCards}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <Item
                        generatorTitle={item}
                        type={item}
                        navigation={navigation}
                        route={route}
                        cards={setGeneratorCards}
                        getRoomObject={getRoomObject(item)}
                        setResetStocking={setIsResetStocking}
                    />
                )}
                stickySectionHeadersEnabled={false}
                renderSectionHeader={({ section: { title } }) => <RoomGeneratorTitle>{title}</RoomGeneratorTitle>}
            />
        </RoomGeneratorContainer>
    );
};
