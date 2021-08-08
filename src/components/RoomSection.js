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

export const RoomSection = ({ navigation, room, deleteFunc }) => {
    const InhabitantView = () => {
        return (
            <CardParagraph>
                <Subheading>Inhabitant: </Subheading>
                {room.neutralInhabitant[4] === '' ? room.dangerousInhabitant[4] : room.neutralInhabitant[4]}
            </CardParagraph>
        );
    };

    const InhabitantReactionView = () => {
        return (
            <CardParagraph>
                <Subheading>Inhabitant reaction: {'\n'}</Subheading>
                {room.inhabitantReaction[4]}
            </CardParagraph>
        );
    };

    const TrapView = () => {
        return (
            <CardParagraph>
                <Subheading>Traps: </Subheading>
                {room.trap[4]}
            </CardParagraph>
        );
    };

    const TreasureView = () => {
        return (
            <CardParagraph>
                <Subheading>Treasure: </Subheading>
                {room.treasure[4]}
            </CardParagraph>
        );
    };

    const DeviceView = () => {
        return (
            <CardParagraph>
                <Subheading>Device: </Subheading>
                {room.device[4]}
            </CardParagraph>
        );
    };

    const BlankView = () => {
        return <></>;
    };

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
                    <Subheading>Large Items: </Subheading>
                    {room.largeItem[4]}
                </CardParagraph>
                <CardParagraph>
                    <Subheading>Small Items: </Subheading>
                    {room.smallItem[4]}
                </CardParagraph>
                {room.neutralInhabitant[4] || room.dangerousInhabitant[4] !== '' ? <InhabitantView /> : <BlankView />}
                {room.inhabitantReaction[4] !== '' ? <InhabitantReactionView /> : <BlankView />}
                {room.trap[4] !== '' ? <TrapView /> : <BlankView />}
                {room.treasure[4] !== '' ? <TreasureView /> : <BlankView />}
                {room.device[4] !== '' ? <DeviceView /> : <BlankView />}
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
