import * as React from 'react';
import styled from 'styled-components/native';

import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Button } from 'react-native-paper';

import { RoomSection } from '../components/RoomSection';

const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 10px;
`;

export const RoomList = ({ navigation, route }) => {
    const [rooms, setRooms] = useState([]);

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
                        navigation.navigate('RoomGenerator');
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
                    icon="keyboard-backspace"
                    uppercase="false"
                    onPress={() => {
                        navigation.navigate('GameList');
                    }}
                >
                    Back
                </Button>
            ),
        });
    }, [navigation]);

    const createRoom = (room) => {
        let tempRooms = [...rooms];
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

    const RoomItem = ({ room, navigation }) => <RoomSection room={room} navigation={navigation} deleteFunc={deleteRoom} />;

    const renderItem = ({ item }) => <RoomItem room={item} navigation={navigation} />;

    useEffect(() => {
        if (route.params) {
            if (!updateRoom(route.params.room)) {
                createRoom(route.params.room);
            }
        }
    }, [route.params]);

    return (
        <Container>
            <FlatList data={rooms} renderItem={renderItem} keyExtractor={(item, index) => item + index} />
        </Container>
    );
};
