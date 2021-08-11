import * as React from 'react';
import { useState } from 'react';

import styled from 'styled-components/native';

import { Card, Paragraph, Button, Subheading, Portal, Dialog, Title } from 'react-native-paper';

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

const CardTitleRow = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    margin-top: ${(props) => props.theme.space[3]};
`;

export const GameSection = ({ navigation, game, deleteFunc }) => {
    const [dialogVisible, setDialogVisible] = useState(false);

    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);

    return (
        <CardContainer>
            <GeneratorCardTitle title={game.name} />
            <Card.Content>
                <CardParagraph>Description: {game.description}</CardParagraph>
                <CardParagraph>Number of Locations: {game.locations ? game.locations.length : '0'}</CardParagraph>
                <CardTitleRow>
                    <Title>Notes</Title>
                </CardTitleRow>
                <CardParagraph>{game.notes}</CardParagraph>
                <ButtonSection>
                    <Button
                        mode="text"
                        dark="false"
                        color="#fff"
                        icon="shape-square-plus"
                        color="#28587B"
                        onPress={() => {
                            navigation.navigate('LocationList', {
                                game: game,
                                navigatingFrom: 'GameList',
                                action: 'Edit',
                            });
                        }}
                    >
                        Locations
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
                                navigatingFrom: 'GameList',
                                action: 'Edit',
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
                            showDialog();
                        }}
                    >
                        Delete
                    </Button>
                </ButtonSection>
            </Card.Content>
            <Portal>
                <Dialog visible={dialogVisible} onDismiss={hideDialog}>
                    <Dialog.Title>Confirm Delete!</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Are you sure you want to delete this game?</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog} color="#28587B">
                            Cancel
                        </Button>
                        <Button
                            color="#28587B"
                            onPress={() => {
                                deleteFunc(game);
                                hideDialog();
                            }}
                        >
                            Confirm
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </CardContainer>
    );
};
