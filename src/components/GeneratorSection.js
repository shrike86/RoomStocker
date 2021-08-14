import React from 'react';
import styled from 'styled-components/native';
import { Card, Paragraph, Button, Title } from 'react-native-paper';

//#region Styles

const GeneratorCardContainer = styled(Card)`
    background-color: ${(props) => props.theme.colours.bg.secondary};
    margin: ${(props) => props.theme.space[3]};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const CardTitle = styled(Title)`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-family: ${(props) => props.theme.fonts.heading};
    padding-top: ${(props) => props.theme.space[3]};
    padding-left: ${(props) => props.theme.space[3]};
`;

const CardParagraph = styled(Paragraph)`
    font-size: ${(props) => props.theme.fontSizes.body};
    font-family: ${(props) => props.theme.fonts.heading};
    padding-bottom: ${(props) => props.theme.space[2]};
    padding-top: ${(props) => props.theme.space[2]};
`;

const GeneratorSectionButton = styled(Button)`
    margin: ${(props) => props.theme.space[2]};
    margin-top: ${(props) => props.theme.space[3]};
    padding-right: ${(props) => props.theme.space[2]};
`;

//#endregion

export const GeneratorSection = ({ navigation, generatorTitle, type, getRoomObject, setResetStocking }) => {
    const assignGenerator = () => {
        switch (type) {
            case 'Basic Room Stocking':
                navigation.navigate('Generator_1', {
                    type: type,
                    roomObject: getRoomObject,
                    setResetStocking: setResetStocking,
                    navigatingFrom: 'RoomGenerator',
                });
                break;
            case 'Room Atmosphere':
                navigation.navigate('Generator_1', {
                    type: type,
                    roomObject: getRoomObject,
                    navigatingFrom: 'RoomGenerator',
                });
                break;
            case 'Prominent Room Ornamentations':
                navigation.navigate('Generator_3', {
                    type: type,
                    roomObject: getRoomObject,
                    navigatingFrom: 'RoomGenerator',
                });
                break;
            case 'Neutral Inhabitant':
                navigation.navigate('Generator_3', {
                    type: type,
                    roomObject: getRoomObject,
                    navigatingFrom: 'RoomGenerator',
                });
                break;
            case 'Dangerous Inhabitant':
                navigation.navigate('Generator_4', {
                    type: type,
                    roomObject: getRoomObject,
                    navigatingFrom: 'RoomGenerator',
                });
                break;
            case 'Inhabitant Reaction to Interlopers':
                navigation.navigate('Generator_2', {
                    type: type,
                    roomObject: getRoomObject,
                    navigatingFrom: 'RoomGenerator',
                });
                break;
            case 'Traps':
                navigation.navigate('Generator_3', {
                    type: type,
                    roomObject: getRoomObject,
                    navigatingFrom: 'RoomGenerator',
                });
                break;
            case 'Treasure':
                navigation.navigate('Generator_3', {
                    type: type,
                    roomObject: getRoomObject,
                    navigatingFrom: 'RoomGenerator',
                });
                break;
            case 'Device':
                navigation.navigate('Generator_2', {
                    type: type,
                    roomObject: getRoomObject,
                    navigatingFrom: 'RoomGenerator',
                });
                break;
            case 'Large Items':
                navigation.navigate('Generator_1', {
                    type: type,
                    roomObject: getRoomObject,
                    navigatingFrom: 'RoomGenerator',
                });
                break;
            case 'Small Items':
                navigation.navigate('Generator_1', {
                    type: type,
                    roomObject: getRoomObject,
                    navigatingFrom: 'RoomGenerator',
                });
                break;
        }
    };
    return (
        <GeneratorCardContainer>
            <CardTitle>{generatorTitle} </CardTitle>
            <Card.Content>
                <CardParagraph>{getRoomObject.displayValue}</CardParagraph>
            </Card.Content>
            <Card.Actions>
                <GeneratorSectionButton onPress={assignGenerator} mode="contained" dark="true" color="#28587B" icon={getRoomObject.isAssigned == true ? 'swap-vertical' : 'plus'}>
                    {getRoomObject.isAssigned == true ? 'Change' : 'Add'}
                </GeneratorSectionButton>
            </Card.Actions>
        </GeneratorCardContainer>
    );
};
