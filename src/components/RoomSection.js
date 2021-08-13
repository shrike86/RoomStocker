import * as React from 'react';
import styled from 'styled-components/native';
import { useState } from 'react';
import { Card, Paragraph, Button, Subheading, Portal, Dialog, Title } from 'react-native-paper';

const CardContainer = styled(Card)`
    background-color: ${(props) => props.theme.colours.bg.primary};
    margin: ${(props) => props.theme.space[3]};
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
`;

const CardSubheading = styled(Subheading)`
    font-size: ${(props) => props.theme.fontSizes.title};
    font-family: ${(props) => props.theme.fonts.heading};
    padding-bottom: ${(props) => props.theme.space[2]};
`;

const CardTitleRow = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: ${(props) => props.theme.space[3]};
    margin-top: ${(props) => props.theme.space[3]};
`;

const CardTitleButton = styled(Button)`
    margin-left: ${(props) => props.theme.space[2]};
`;

const ButtonSection = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: ${(props) => props.theme.space[4]};
`;

export const RoomSection = ({ navigation, room, deleteFunc, updateNameFunc }) => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);

    const InhabitantView = () => {
        return (
            <>
                <CardSubheading>Inhabitant:</CardSubheading>
                <CardParagraph>{room.dangerousInhabitant.isAssigned ? room.dangerousInhabitant.displayValue : room.neutralInhabitant.displayValue}</CardParagraph>
            </>
        );
    };

    const InhabitantReactionView = () => {
        return (
            <>
                <CardSubheading>Inhabitant reaction:</CardSubheading>
                <CardParagraph>{room.inhabitantReaction.displayValue}</CardParagraph>
            </>
        );
    };

    const TrapView = () => {
        return (
            <>
                <CardSubheading>Traps:</CardSubheading>
                <CardParagraph>{room.trap.displayValue}</CardParagraph>
            </>
        );
    };

    const TreasureView = () => {
        return (
            <>
                <CardSubheading>Treasure:</CardSubheading>
                <CardParagraph>{room.treasure.displayValue}</CardParagraph>
            </>
        );
    };

    const DeviceView = () => {
        return (
            <>
                <CardSubheading>Device:</CardSubheading>
                <CardParagraph>{room.device.displayValue}</CardParagraph>
            </>
        );
    };

    const BlankView = () => {
        return <></>;
    };

    return (
        <CardContainer>
            <Card.Content>
                <CardTitleRow>
                    <CardTitle>{room.name}</CardTitle>
                    <CardTitleButton
                        mode="text"
                        dark="false"
                        color="#fff"
                        icon="square-edit-outline"
                        color="#28587B"
                        onPress={() => {
                            navigation.navigate('ChangeLocationName', {
                                room: room,
                                navigatingFrom: 'RoomList',
                                action: 'Edit',
                                updateNameFunc: updateNameFunc,
                            });
                        }}
                    >
                        Change
                    </CardTitleButton>
                </CardTitleRow>
                <CardSubheading>Stocking:</CardSubheading>
                <CardParagraph>{room.stocking.displayValue}</CardParagraph>
                <CardSubheading>Atmosphere:</CardSubheading>
                <CardParagraph>{room.atmosphere.displayValue}</CardParagraph>
                <CardSubheading>Ornamentations:</CardSubheading>
                <CardParagraph>{room.ornamentation.displayValue}</CardParagraph>
                <CardSubheading>Large Items:</CardSubheading>
                <CardParagraph>{room.largeItem.displayValue}</CardParagraph>
                <CardSubheading>Small Items:</CardSubheading>
                <CardParagraph>{room.smallItem.displayValue}</CardParagraph>
                {room.neutralInhabitant.isAssigned || room.dangerousInhabitant.isAssigned ? <InhabitantView /> : <BlankView />}
                {room.inhabitantReaction.isAssigned ? <InhabitantReactionView /> : <BlankView />}
                {room.trap.isAssigned ? <TrapView /> : <BlankView />}
                {room.treasure.isAssigned ? <TreasureView /> : <BlankView />}
                {room.device.isAssigned ? <DeviceView /> : <BlankView />}
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
                                room: room,
                                navigatingFrom: 'RoomList',
                                action: 'Edit',
                            });
                        }}
                    >
                        {room.notes === '' ? 'Add' : 'Change'}
                    </CardTitleButton>
                </CardTitleRow>
                <CardParagraph>{room.notes}</CardParagraph>
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
                                navigatingFrom: 'RoomList',
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
                        <Paragraph>Are you sure you want to delete this room?</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog} color="#28587B">
                            Cancel
                        </Button>
                        <Button
                            color="#28587B"
                            onPress={() => {
                                deleteFunc(room);
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
