import * as React from 'react';
import styled from 'styled-components/native';
import { TextInput, Button, FAB } from 'react-native-paper';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';

const FormContainer = styled.ScrollView`
    padding-top: ${(props) => props.theme.space[2]};
    padding-right: ${(props) => props.theme.space[3]};
    padding-left: ${(props) => props.theme.space[3]};
`;

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.colours.bg.primary};
`;

export const ChangeRoomName = ({ navigation, route }) => {
    const [name, setName] = useState(route.params.room.name);
    const [isSave, setIsSave] = useState(false);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            // headerRight: () => (
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
            headerLeft: () => (
                <Button
                    mode="text"
                    dark="false"
                    color="#fff"
                    icon="keyboard-backspace"
                    uppercase="false"
                    onPress={() => {
                        navigation.navigate('RoomList', {
                            navigatingFrom: 'ChangeLocationName',
                            action: 'Cancel',
                        });
                    }}
                >
                    Cancel
                </Button>
            ),
        });
    }, [navigation]);

    React.useEffect(() => {
        if (isSave) {
            route.params.updateNameFunc(route.params.room, name);
            navigation.navigate('RoomList', {
                navigatingFrom: 'ChangeLocationName',
                action: 'Save',
            });
        }
    }, [isSave]);

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
            <FormContainer>
                <TextInput label="Location Name" mode="outlined" theme={{ colors: { primary: '#28587B' } }} value={name} onChangeText={(newName) => setName(newName)}></TextInput>
            </FormContainer>
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
