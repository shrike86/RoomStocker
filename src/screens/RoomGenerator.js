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
                        setIsSaved(true);
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
                        navigation.navigate('RoomList');
                    }}
                >
                    Cancel
                </Button>
            ),
        });
    }, [navigation]);

    const [isSaved, setIsSaved] = useState(false);
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
    const defaultObj = ['', '', '', '', '', false];

    const [placeObject, setPlaceObject] = useState(['', '', '', '', '', false]);

    const [stockingObject, setStockingObject] = useState(['', '', '', '', '', false]);

    const [atmosphereObject, setAtmosphereObject] = useState(['', '', '', '', '', false]);

    const [ornamentationsObject, setOrnamentationsObject] = useState(['', '', '', '', '', false]);

    const [neutralInhabitantObject, setNeutralInhabitantObject] = useState(['', '', '', '', '', false]);

    const [dangerousInhabitantObject, setDangerousInhabitantObject] = useState(['', '', '', '', '', false]);

    const [inhabitantReactionObject, setInhabitantReactionObject] = useState(['', '', '', '', '', false]);

    const [trapsObject, setTrapsObject] = useState(['', '', '', '', '', false]);

    const [treasureObject, setTreasureObject] = useState(['', '', '', '', '', false]);

    const [deviceObject, setDeviceObject] = useState(['', '', '', '', '', false]);

    const [largeItemObject, setLargeItemObject] = useState(['', '', '', '', '', false]);

    const [smallItemObject, setSmallItemObject] = useState(['', '', '', '', '', false]);

    //#endregion

    //#region Generator Objects Setter and Getters

    const setRoomObject = (type, newValue) => {
        switch (type) {
            case 'Place':
                setPlaceObject(newValue);
                break;
            case 'Basic Room Stocking':
                setStockingObject(newValue);
                addCardsBasedOnRoomState(setGeneratorCards, newValue);
                break;
            case 'Room Atmosphere':
                setAtmosphereObject(newValue);
                break;
            case 'Prominent Room Ornamentations':
                setOrnamentationsObject(newValue);
                break;
            case 'Neutral Inhabitant':
                setNeutralInhabitantObject(newValue);
                break;
            case 'Dangerous Inhabitant':
                setDangerousInhabitantObject(newValue);
                break;
            case 'Inhabitant Reaction to Interlopers':
                setInhabitantReactionObject(newValue);
                break;
            case 'Traps':
                setTrapsObject(newValue);
                break;
            case 'Treasure':
                setTreasureObject(newValue);
                break;
            case 'Device':
                setDeviceObject(newValue);
                break;
            case 'Large Items':
                setLargeItemObject(newValue);
                break;
            case 'Small Items':
                setSmallItemObject(newValue);
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

    // Set editing status and editing guid.
    useEffect(() => {
        if (route.params?.editing) {
            setIsEditingRoom(true);
            setEditingGuid(route.params.room.roomId);
        } else {
            setIsEditingRoom(false);
        }
    }, [isEditingRoom]);

    // Clear values for cards that are driven by the current stocking value.
    useEffect(() => {
        // Reset
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
        if (route.params) {
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
            if (route.params.room.neutralInhabitant[4] !== '' || route.params.room.dangerousInhabitant[4] !== '') {
                if (route.params.room.neutralInhabitant[4] !== '') {
                    newCards[1].data.push('Neutral Inhabitant');
                } else if (route.params.room.dangerousInhabitant[4] !== '') {
                    newCards[1].data.push('Dangerous Inhabitant');
                }

                newCards[1].data.push('Inhabitant Reaction to Interlopers');

                if (route.params.room.trap[4] !== '') {
                    newCards[1].data.push('Traps');
                } else if (route.params.room.treasure[4] !== '') {
                    newCards[1].data.push('Treasure');
                } else if (route.params.room.device[4] !== '') {
                    newCards[1].data.push('Device');
                }

                setGeneratorCards([...newCards]);
            } else if (route.params.room.trap[4] !== '') {
                newCards[1].data.push('Traps');
                setGeneratorCards([...newCards]);
            } else if (route.params.room.treasure[4] !== '') {
                newCards[1].data.push('Treasure');
                setGeneratorCards([...newCards]);
            } else if (route.params.room.device[4] !== '') {
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
        }
    }, [route.params]);

    useEffect(() => {
        if (isSaved) {
            if (placeObject[0] !== '') {
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
                });
            } else {
                navigation.navigate('RoomList');
            }
        }
    });

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
                        setRoomObject={setRoomObject}
                        setResetStocking={setIsResetStocking}
                    />
                )}
                stickySectionHeadersEnabled={false}
                renderSectionHeader={({ section: { title } }) => <RoomGeneratorTitle>{title}</RoomGeneratorTitle>}
            />
        </RoomGeneratorContainer>
    );
};
