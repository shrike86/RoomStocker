import * as React from 'react';
import styled from 'styled-components/native';

import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Button } from 'react-native-paper';

import { LocationSection } from '../components/LocationSection';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.colours.bg.primary};
`;

export const LocationList = ({ navigation, route }) => {
    const [locations, setLocations] = useState([]);
    const [isSave, setIsSave] = useState(false);
    const [currentGame, setCurrentGame] = useState({});

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    mode="text"
                    dark="false"
                    color="#fff"
                    icon="plus"
                    uppercase="false"
                    onPress={() => {
                        navigation.navigate('Generator_3', {
                            navigatingFrom: 'LocationList',
                            action: 'Create',
                            type: 'Place',
                        });
                    }}
                >
                    Create
                </Button>
            ),
            headerLeft: () => (
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
        });
    }, [navigation]);

    const createLocation = (location) => {
        let tempLocations = [...locations];
        tempLocations.push(location);
        setLocations(tempLocations);
    };

    const updateLocation = (location) => {
        for (let index in locations) {
            if (locations[index] !== undefined && locations[index].locationId === location.locationId) {
                locations[index] = location;
                setLocations([...locations]);
                return true;
            }
        }
    };

    const updateLocationRooms = (location, rooms) => {
        for (let index in locations) {
            if (locations[index] !== undefined && locations[index].locationId === location.locationId) {
                // let tempLocationRooms = [...locations[index].rooms];
                // tempLocationRooms.push(rooms);
                locations[index].rooms = rooms;
                setLocations([...locations]);
                return true;
            }
        }
    };

    const deleteLocation = (location) => {
        for (let index in locations) {
            if (locations[index] !== undefined && locations[index].locationId === location.locationId) {
                locations.splice(index, 1);
                setLocations([...locations]);
            }
        }
    };

    const updateLocationNote = (location, note) => {
        for (let index in locations) {
            if (locations[index] !== undefined && locations[index].locationId === location.locationId) {
                let newLocation = locations[index];
                newLocation.notes = note;
                locations[index] = newLocation;
                setLocations([...locations]);
            }
        }
    };

    const LocationItem = ({ location, navigation }) => <LocationSection location={location} navigation={navigation} deleteFunc={deleteLocation} />;

    const renderItem = ({ item }) => <LocationItem location={item} navigation={navigation} />;

    useEffect(() => {
        if (isSave) {
            navigation.navigate('GameList', {
                game: currentGame,
                locations: locations,
                navigatingFrom: 'LocationList',
                action: 'Save',
            });
        }
    }, [isSave]);

    useEffect(() => {
        if (route.params.navigatingFrom == 'GameList' && route.params.action == 'Edit') {
            setCurrentGame(route.params.game);
            setLocations([...route.params.game.locations]);
        } else if (route.params.navigatingFrom == 'RoomList' && route.params.action == 'Save') {
            updateLocationRooms(route.params.location, route.params.rooms);
        } else if (route.params.navigatingFrom == 'Generator' && route.params.action == 'Save') {
            if (!updateLocation(route.params.location)) {
                createLocation(route.params.location);
            }
        } else if (route.params.navigatingFrom == 'CreateNoteForm' && route.params.action == 'Save') {
            updateLocationNote(route.params.location, route.params.note);
        }
    }, [route.params]);

    return (
        <Container>
            <FlatList data={locations} renderItem={renderItem} keyExtractor={(item, index) => item + index} />
        </Container>
    );
};
