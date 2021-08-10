import * as React from 'react';
import styled from 'styled-components/native';
import { useState } from 'react';
import { Card, Paragraph, Button, Subheading, Portal, Dialog } from 'react-native-paper';

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
    const [dialogVisible, setDialogVisible] = useState(false);
    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);

    const InhabitantView = () => {
        return (
            <CardParagraph>
                <Subheading>Inhabitant: {'\n'}</Subheading>
                {room.dangerousInhabitant.isAssigned ? room.dangerousInhabitant.displayValue : room.neutralInhabitant.displayValue}
            </CardParagraph>
        );
    };

    const InhabitantReactionView = () => {
        return (
            <CardParagraph>
                <Subheading>Inhabitant reaction: {'\n'}</Subheading>
                {room.inhabitantReaction.displayValue}
            </CardParagraph>
        );
    };

    const TrapView = () => {
        return (
            <CardParagraph>
                <Subheading>Traps: {'\n'}</Subheading>
                {room.trap.displayValue}
            </CardParagraph>
        );
    };

    const TreasureView = () => {
        return (
            <CardParagraph>
                <Subheading>Treasure: {'\n'}</Subheading>
                {room.treasure.displayValue}
            </CardParagraph>
        );
    };

    const DeviceView = () => {
        return (
            <CardParagraph>
                <Subheading>Device: {'\n'}</Subheading>
                {room.device.displayValue}
            </CardParagraph>
        );
    };

    const BlankView = () => {
        return <></>;
    };

    return (
        <CardContainer>
            <GeneratorCardTitle title={room.place.displayValue} />
            <Card.Content>
                <CardParagraph>
                    <Subheading>Stocking: {'\n'}</Subheading>
                    {room.stocking.displayValue}
                </CardParagraph>
                <CardParagraph>
                    <Subheading>Atmosphere: {'\n'}</Subheading>
                    {room.atmosphere.displayValue}
                </CardParagraph>
                <CardParagraph>
                    <Subheading>Ornamentations: {'\n'}</Subheading>
                    {room.ornamentation.displayValue}
                </CardParagraph>
                <CardParagraph>
                    <Subheading>Large Items: {'\n'}</Subheading>
                    {room.largeItem.displayValue}
                </CardParagraph>
                <CardParagraph>
                    <Subheading>Small Items: {'\n'}</Subheading>
                    {room.smallItem.displayValue}
                </CardParagraph>
                {room.neutralInhabitant.isAssigned || room.dangerousInhabitant.isAssigned ? <InhabitantView /> : <BlankView />}
                {room.inhabitantReaction.isAssigned ? <InhabitantReactionView /> : <BlankView />}
                {room.trap.isAssigned ? <TrapView /> : <BlankView />}
                {room.treasure.isAssigned ? <TreasureView /> : <BlankView />}
                {room.device.isAssigned ? <DeviceView /> : <BlankView />}
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
