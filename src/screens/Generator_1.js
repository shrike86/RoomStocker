import React from 'react';
import styled from 'styled-components/native';

import { useState, useEffect } from 'react';
import { Title, Text, Button, FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { getRoomAtmosphere, getRoomStocking, getLargeItems, getSmallItems } from '../services/DataService';

//#region Styles

const GeneratorContainer = styled.View`
    flex: 1;
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

export const Generator_1 = ({ navigation, route }) => {
    const [value_1, setValue_1] = useState('');
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
                        navigation.navigate('RoomGenerator', {
                            navigatingFrom: 'Generator',
                            action: 'Cancel',
                        });
                    }}
                >
                    Cancel
                </Button>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        if (isSave) {
            if (route.params.type === 'Basic Room Stocking') {
                route.params.setResetStocking(true);
            }

            navigation.navigate('RoomGenerator', {
                navigatingFrom: 'Generator',
                action: 'Save',
                type: route.params.type,
                roomObject: {
                    generatedValue_1: value_1,
                    generatedValue_2: '',
                    generatedValue_3: '',
                    generatedValue_4: '',
                    displayValue: value_1,
                    isAssigned: true,
                },
            });
        }
    }, [isSave]);

    useEffect(() => {
        setValue_1(route.params.roomObject.generatedValue_1);
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
        <GeneratorContainer>
            <GeneratorTitle>{route.params.type}</GeneratorTitle>
            <GeneratorValue>{value_1}</GeneratorValue>
            <ButtonContainer>
                <GeneratorButton
                    mode="contained"
                    dark="true"
                    color="#28587B"
                    onPress={() => {
                        if (route.params.type === 'Basic Room Stocking') {
                            setValue_1(getRoomStocking());
                        } else if (route.params.type === 'Room Atmosphere') {
                            setValue_1(getRoomAtmosphere());
                        } else if (route.params.type === 'Large Items') {
                            setValue_1(getLargeItems());
                        } else if (route.params.type === 'Small Items') {
                            setValue_1(getSmallItems());
                        }
                    }}
                >
                    Generate
                </GeneratorButton>
            </ButtonContainer>
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
        </GeneratorContainer>
    );
};
