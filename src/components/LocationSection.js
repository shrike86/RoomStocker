import React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { Card, Paragraph, Button, Portal, Dialog, Subheading, Title } from 'react-native-paper';

//#region Styles

const LocationCardContainer = styled(Card)`
    background-color: ${(props) => props.theme.colours.bg.primary};
    margin: ${(props) => props.theme.space[3]};
`;

const CardTitleRow = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    margin-top: ${(props) => props.theme.space[3]};
    margin-bottom: ${(props) => props.theme.space[2]};
`;

const CardTitle = styled(Title)`
    font-size: ${(props) => props.theme.fontSizes.h4};
    font-family: ${(props) => props.theme.fonts.heading};
    padding-top: ${(props) => props.theme.space[2]};
    text-decoration: underline;
`;

const CardParagraph = styled(Paragraph)`
    font-size: ${(props) => props.theme.fontSizes.paragraph};
    font-family: ${(props) => props.theme.fonts.heading};
    padding-bottom: ${(props) => props.theme.space[2]};
    padding-top: ${(props) => props.theme.space[2]};
`;

const CardTitleButton = styled(Button)`
    margin-left: ${(props) => props.theme.space[2]};
`;

const ButtonSection = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: ${(props) => props.theme.space[3]};
`;

//#endregion

export const LocationSection = ({ navigation, location, deleteFunc }) => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);

    return (
        <LocationCardContainer>
            <Card.Content>
                <CardTitle>{location.locationObject.displayValue}</CardTitle>
                <CardParagraph>Number of rooms: {location.rooms.length}</CardParagraph>
                <CardTitleRow>
                    <CardTitle>Notes</CardTitle>
                    <CardTitleButton
                        mode="text"
                        dark="false"
                        color="#fff"
                        icon="square-edit-outline"
                        color="#28587B"
                        onPress={() => {
                            navigation.navigate('CreateNoteForm', {
                                location: location,
                                navigatingFrom: 'LocationList',
                                action: 'Edit',
                            });
                        }}
                    >
                        {location.notes === '' ? 'Add' : 'Change'}
                    </CardTitleButton>
                </CardTitleRow>
                <CardParagraph>{location.notes}</CardParagraph>
            </Card.Content>
            <Card.Actions>
                <ButtonSection>
                    <Button
                        mode="text"
                        dark="false"
                        color="#fff"
                        icon="shape-square-plus"
                        color="#28587B"
                        onPress={() => {
                            navigation.navigate('RoomList', {
                                navigatingFrom: 'LocationList',
                                action: 'Edit',
                                location: location,
                            });
                        }}
                    >
                        Rooms
                    </Button>
                    <Button
                        mode="text"
                        dark="false"
                        color="#fff"
                        icon="square-edit-outline"
                        color="#28587B"
                        onPress={() => {
                            navigation.navigate('Generator_3', {
                                navigatingFrom: 'LocationList',
                                action: 'Edit',
                                location: location,
                                type: 'Place',
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
            </Card.Actions>
            <Portal>
                <Dialog visible={dialogVisible} onDismiss={hideDialog}>
                    <Dialog.Title>Confirm Delete!</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Are you sure you want to delete this location?</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog} color="#28587B">
                            Cancel
                        </Button>
                        <Button
                            color="#28587B"
                            onPress={() => {
                                deleteFunc(location);
                                hideDialog();
                            }}
                        >
                            Confirm
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </LocationCardContainer>
    );
};
