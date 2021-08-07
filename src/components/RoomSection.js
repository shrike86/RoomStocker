import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Card, Paragraph, Button, Subheading } from 'react-native-paper';
import { View } from 'react-native';

const CardContainer = styled(Card)`
    background-color: ${(props) => props.theme.colours.bg.primary};
    margin: ${(props) => props.theme.space[3]};
`;

const GeneratorCardTitle = styled(Card.Title)`
    font-size: ${(props) => props.theme.lineHeights.title};
`;

const CardParagraph = styled(Paragraph)`
    margin-top: ${(props) => props.theme.space[2]};
`;

const ButtonSection = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: ${(props) => props.theme.space[3]};
`;

export const RoomSection = ({ navigation, room, deleteFunc }) => {
    const [roomDescription, setRoomDescription] = useState('');

    useEffect(() => {
        let desc = `This room contains an ${room.stocking[4]} ${room.atmosphere[4]} ${room.ornamentation[4]}`;
        setRoomDescription(desc);
    }, [room]);

    return (
        <CardContainer>
            <GeneratorCardTitle title={room.place[4]} />
            <Card.Content>
                <CardParagraph>
                    <Subheading>Stocking: </Subheading>
                    {room.stocking[4]}
                </CardParagraph>
                <CardParagraph>
                    <Subheading>Atmosphere: </Subheading>
                    {room.atmosphere[4]}
                </CardParagraph>
                <CardParagraph>
                    <Subheading>Ornamentations: </Subheading>
                    {room.ornamentation[4]}
                </CardParagraph>
                <CardParagraph>
                    <Subheading>Inhabitant: </Subheading>
                    {room.neutralInhabitant[4] === ''
                        ? room.dangerousInhabitant[4]
                        : room.neutralInhabitant[4]}
                </CardParagraph>
                <ButtonSection>
                    <Button
                        mode="text"
                        dark="false"
                        color="#fff"
                        icon="square-edit-outline"
                        color="#28587B"
                        onPress={() => {
                            navigation.navigate('RoomGenerator', {
                                room: room,
                            });
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        mode="text"
                        dark="false"
                        color="#fff"
                        icon="delete-forever"
                        color="#28587B"
                        onPress={() => {
                            deleteFunc(room);
                        }}
                    >
                        Delete
                    </Button>
                </ButtonSection>
            </Card.Content>
            <Card.Actions></Card.Actions>
        </CardContainer>
    );
};
