import * as React from 'react';
import styled from 'styled-components/native';

import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Button } from 'react-native-paper';

import { RoomSection } from '../../components/RoomSection';

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
        });
    }, [navigation]);

    useEffect(() => {});

    const deleteRoom = (room) => {
        for (let index in rooms) {
            if (
                rooms[index] !== undefined &&
                rooms[index].place[0] === room.place[0]
            ) {
                rooms.splice(index, 1);
                setRooms([...rooms]);
                break;
            }
        }
    };

    const RoomItem = ({ room, navigation }) => (
        <RoomSection
            room={room}
            navigation={navigation}
            deleteFunc={deleteRoom}
        />
    );

    const renderItem = ({ item }) => (
        <RoomItem room={item} navigation={navigation} />
    );

    useEffect(() => {
        if (route.params) {
            let tempRooms = [...rooms];
            tempRooms.push(route.params.room);
            setRooms(tempRooms);
        }
    }, [route.params]);

    return (
        <Container>
            <FlatList
                data={rooms}
                renderItem={renderItem}
                keyExtractor={(item, index) => item + index}
            />
        </Container>
    );
};
