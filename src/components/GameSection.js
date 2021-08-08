import * as React from 'react';

import styled from 'styled-components/native';

import { Card, Paragraph, Button, Subheading } from 'react-native-paper';

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

export const GameSection = ({ navigation, game, deleteFunc }) => {
    return (
        <CardContainer>
            <GeneratorCardTitle title={game.name} />
            <Card.Content>
                <CardParagraph>
                    <Subheading>Description: </Subheading>
                    {game.description}
                </CardParagraph>
                <CardParagraph>
                    <Subheading>Number of rooms: </Subheading>
                    {game.roomCount}
                </CardParagraph>
                <ButtonSection>
                    <Button
                        mode="text"
                        dark="false"
                        color="#fff"
                        icon="shape-square-plus"
                        color="#28587B"
                        onPress={() => {
                            navigation.navigate('RoomList');
                        }}
                    >
                        Add Rooms
                    </Button>
                    <Button
                        mode="text"
                        dark="false"
                        color="#fff"
                        icon="square-edit-outline"
                        color="#28587B"
                        onPress={() => {
                            navigation.navigate('CreateGame', {
                                game: game,
                                editing: true,
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
                            deleteFunc(game);
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
