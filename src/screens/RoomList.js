import * as React from 'react';
import styled from 'styled-components/native';

import { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Button, FAB } from 'react-native-paper';

import { RoomSection } from '../components/RoomSection';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.colours.bg.primary};
`;

export const RoomList = ({ navigation, route }) => {
    const [rooms, setRooms] = useState([]);
    const [isSave, setIsSave] = useState(false);
    const [currentLocation, setCurrentLocation] = useState({});

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
                        navigation.navigate('RoomGenerator', {
                            navigatingFrom: 'RoomList',
                            action: 'Create',
                        });
                    }}
                >
                    Create
                </Button>
            ),
            // headerLeft: () => (
            //     <Button
            //         mode="text"
            //         dark="false"
            //         color="#fff"
            //         icon="content-save"
            //         uppercase="false"
            //         onPress={() => {
            //             setIsSave(true);
            //         }}
            //     >
            //         Save
            //     </Button>
            // ),
            headerLeft: () => {
                return null;
            },
        });
    }, [navigation]);

    const createRoom = (room) => {
        let tempRooms = [...rooms];
        room.name = 'Room ' + ++rooms.length;
        tempRooms.push(room);
        setRooms(tempRooms);
    };

    const updateRoom = (room) => {
        for (let index in rooms) {
            if (rooms[index] !== undefined && rooms[index].roomId === room.roomId) {
                rooms[index] = room;
                setRooms([...rooms]);
                return true;
            }
        }
    };

    const deleteRoom = (room) => {
        for (let index in rooms) {
            if (rooms[index] !== undefined && rooms[index].roomId === room.roomId) {
                rooms.splice(index, 1);
                setRooms([...rooms]);
            }
        }
    };

    const updateRoomName = (room, newName) => {
        for (let index in rooms) {
            if (rooms[index] !== undefined && rooms[index].roomId === room.roomId) {
                let newRoom = rooms[index];
                newRoom.name = newName;
                rooms[index] = newRoom;
                setRooms([...rooms]);
            }
        }
    };

    const updateRoomNote = (room, note) => {
        for (let index in rooms) {
            if (rooms[index] !== undefined && rooms[index].roomId === room.roomId) {
                let newRoom = rooms[index];
                newRoom.notes = note;
                rooms[index] = newRoom;
                setRooms([...rooms]);
            }
        }
    };

    const RoomItem = ({ room, navigation }) => <RoomSection room={room} navigation={navigation} deleteFunc={deleteRoom} updateNameFunc={updateRoomName} />;

    const renderItem = ({ item }) => <RoomItem room={item} navigation={navigation} />;

    useEffect(() => {
        if (isSave) {
            navigation.navigate('LocationList', {
                location: currentLocation,
                rooms: rooms,
                navigatingFrom: 'RoomList',
                action: 'Save',
            });
        }
    }, [isSave]);

    // when navigating from the game list, save the current game and populate rooms based on the games rooms.
    useEffect(() => {
        if (route.params.navigatingFrom == 'LocationList' && route.params.action == 'Edit') {
            setCurrentLocation(route.params.location);
            setRooms([...route.params.location.rooms]);
        } else if (route.params.navigatingFrom == 'RoomGenerator' && route.params.action == 'Save') {
            if (!updateRoom(route.params.room)) {
                createRoom(route.params.room);
            }
        } else if (route.params.navigatingFrom == 'CreateNoteForm' && route.params.action == 'Save') {
            updateRoomNote(route.params.room, route.params.note);
        }
    }, [route.params]);

    const styles = StyleSheet.create({
        fab: {
            position: 'absolute',
            margin: 30,
            right: 0,
            bottom: 20,
        },
    });

    return (
        <Container>
            <FlatList data={rooms} renderItem={renderItem} keyExtractor={(item, index) => item + index} />
            <FAB
                color="#FFFFFF"
                style={styles.fab}
                icon="content-save"
                label="Save"
                theme={{ colors: { primary: '#FFFFFF', background: '#28587B', accent: '#28587B' } }}
                onPress={() => {
                    setIsSave(true);
                }}
            />
        </Container>
    );
};
