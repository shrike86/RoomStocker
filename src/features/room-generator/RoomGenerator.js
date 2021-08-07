import React from 'react';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { SectionList, StatusBar } from 'react-native';
import { GeneratorSection } from '../../components/GeneratorSection';
import { Title, Button } from 'react-native-paper';

import { addCardsBasedOnRoomState } from '../../services/DataService';

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

    // Default room sections.
    const [generatorCards, setGeneratorCards] = useState([
        {
            title: 'Room Location',
            data: ['Place'],
        },
        {
            title: 'Room Stocking',
            data: [
                'Basic Room Stocking',
                'Room Atmosphere',
                'Prominent Room Ornamentations',
            ],
        },
    ]);

    //#region Init Generator Objects

    const [placeObject, setPlaceObject] = useState(['', '', '', '', '', false]);

    const [stockingObject, setStockingObject] = useState([
        '',
        '',
        '',
        '',
        '',
        false,
    ]);

    const [atmosphereObject, setAtmosphereObject] = useState([
        '',
        '',
        '',
        '',
        '',
        false,
    ]);

    const [ornamentationsObject, setOrnamentationsObject] = useState([
        '',
        '',
        '',
        '',
        '',
        false,
    ]);

    const [neutralInhabitantObject, setNeutralInhabitantObject] = useState([
        '',
        '',
        '',
        '',
        '',
        false,
    ]);

    const [dangerousInhabitantObject, setDangerousInhabitantObject] = useState([
        '',
        '',
        '',
        '',
        '',
        false,
    ]);

    const [inhabitantReactionObject, setInhabitantReactionObject] = useState([
        '',
        '',
        '',
        '',
        '',
        false,
    ]);

    const [trapsObject, setTrapsObject] = useState(['', '', '', '', '', false]);

    const [treasureObject, setTreasureObject] = useState([
        '',
        '',
        '',
        '',
        '',
        false,
    ]);

    const [deviceObject, setDeviceObject] = useState([
        '',
        '',
        '',
        '',
        '',
        false,
    ]);

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
        }
    };

    //#endregion

    const Item = ({
        generatorTitle,
        type,
        navigation,
        route,
        cards,
        getRoomObject,
        setRoomObject,
    }) => (
        <GeneratorSection
            generatorTitle={generatorTitle}
            type={type}
            navigation={navigation}
            route={route}
            cards={cards}
            getRoomObject={getRoomObject}
            setRoomObject={setRoomObject}
        ></GeneratorSection>
    );

    useEffect(() => {
        if (route.params) {
            setPlaceObject(route.params.room.place);
            setStockingObject(route.params.room.stocking);
            setAtmosphereObject(route.params.room.atmosphere);
            setOrnamentationsObject(route.params.room.ornamentation);
        }
    }, [route.params]);

    useEffect(() => {
        if (isSaved) {
            if (placeObject[0] !== '') {
                navigation.navigate('RoomList', {
                    room: {
                        place: placeObject,
                        stocking: stockingObject,
                        atmosphere: atmosphereObject,
                        ornamentation: ornamentationsObject,
                        neutralInhabitant: neutralInhabitantObject,
                        dangerousInhabitant: dangerousInhabitantObject,
                        device: deviceObject,
                        trap: trapsObject,
                        treasure: treasureObject,
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
                    />
                )}
                stickySectionHeadersEnabled={false}
                renderSectionHeader={({ section: { title } }) => (
                    <RoomGeneratorTitle>{title}</RoomGeneratorTitle>
                )}
            />
        </RoomGeneratorContainer>
    );
};
