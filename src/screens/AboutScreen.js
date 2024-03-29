import * as React from 'react';
import { useCallback } from 'react';
import { Paragraph, Caption, Title, Button, Portal, Modal, Subheading } from 'react-native-paper';
import { View, Image, Text, Linking, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const AboutContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.colours.bg.primary};
`;

export const ImageContainer = styled.View`
    flex: 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.theme.space[4]};
`;

export const ImageTitle = styled(Title)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.h5};
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const AboutImage = styled.Image`
    width: 125px;
    height: 125px;
    justify-content: center;
    align-items: center;
    margin-bottom: ${(props) => props.theme.space[2]};
`;

export const ButtonContainer = styled.View`
    flex: 4;
    flex-direction: column;
    margin-top: ${(props) => props.theme.space[4]};
`;

export const AboutButton = styled(Button)`
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5px;
    height: 50px;
`;

export const FooterContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.theme.space[4]};
`;

export const ModalTitle = styled(Title)`
    text-align: center;
    font-family: Oswald_400Regular;
    font-size: 25px;
    margin-bottom: 20px;
    margin-top: 30px;
`;

export const ModalSubheading = styled(Subheading)`
    font-family: Oswald_400Regular;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 16px;
`;

export const ModalParagraph = styled(Paragraph)`
    font-family: Oswald_400Regular;
    font-size: 14px;
    margin-bottom: 15px;
    margin-left: 16px;
    margin-right: 16px;
`;

export const ModalContainer = styled(Portal)``;

export const AboutScreen = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const containerStyle = { backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, borderRadius: 20 };

    const handleLink = useCallback(async (url) => {
        await Linking.openURL(url);
    });

    return (
        <AboutContainer>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <ScrollView>
                        <ModalTitle>How to use this app</ModalTitle>
                        <ModalSubheading>Games</ModalSubheading>
                        <ModalParagraph>Create a game and enter a name, description and notes. Once created, add locations to your game.</ModalParagraph>
                        <ModalSubheading>Locations</ModalSubheading>
                        <ModalParagraph>
                            Create a location and choose the randomly generated values you would like. Once created you can add notes for this location.
                        </ModalParagraph>
                        <ModalParagraph>A location can have multiple rooms, create them by pressing the rooms button.</ModalParagraph>
                        <ModalSubheading>Rooms</ModalSubheading>
                        <ModalParagraph>
                            When creating a room, note that there are multiple sections and each of these can be populated by randomly generated values.
                        </ModalParagraph>
                        <ModalParagraph>
                            Depending on the value that is generated from "Basic Room Stocking", other sections may become visible. Save the room when all sections are complete.
                        </ModalParagraph>
                        <ModalParagraph>
                            For any "Basic Room Stocking" values that contain an inhabitant, either a neutral or dangerous inhabitant will be added to the room.
                        </ModalParagraph>
                        <ModalParagraph>
                            There is 50% chance to get either type, which is triggered upon saving the "Basic Room Stocking" generator. Use this method if you would like to re-roll
                            a result.
                        </ModalParagraph>
                        <ModalParagraph>
                            Once a room is saved, a default name will be assigned, this can be changed to a value of your choice. A room can also have notes added.
                        </ModalParagraph>
                        <Button
                            mode="outlined"
                            dark="false"
                            color="#28587B"
                            onPress={() => {
                                hideModal();
                            }}
                        >
                            Close
                        </Button>
                    </ScrollView>
                </Modal>
            </Portal>
            <ImageContainer>
                <ImageTitle>RPG Room Stocker</ImageTitle>
                <AboutImage source={require('../../assets/icon.png')}></AboutImage>
                <Paragraph>v{Constants.manifest.version}</Paragraph>
            </ImageContainer>
            <ButtonContainer>
                <AboutButton
                    mode="outlined"
                    icon="help"
                    dark="false"
                    color="#28587B"
                    onPress={() => {
                        showModal();
                    }}
                >
                    How to
                </AboutButton>
                <AboutButton
                    mode="outlined"
                    icon="discord"
                    dark="false"
                    color="#28587B"
                    onPress={() => {
                        handleLink('https://discord.gg/NDrtRKs');
                    }}
                >
                    Discord
                </AboutButton>
                <AboutButton
                    mode="outlined"
                    icon="cart"
                    dark="false"
                    color="#28587B"
                    onPress={() => {
                        handleLink('https://www.drivethrurpg.com/browse/pub/7209/Gorgzu-Games');
                    }}
                >
                    Gorgzu Games
                </AboutButton>
                <AboutButton
                    mode="outlined"
                    icon="pencil-box"
                    dark="false"
                    color="#28587B"
                    onPress={() => {
                        handleLink('http://lizardmandiaries.blogspot.com/');
                    }}
                >
                    Lizard Man Diaries
                </AboutButton>
            </ButtonContainer>
            <FooterContainer>
                <Caption>Copyright 2021, Gorgzu Games</Caption>
                <Caption>App developed by Mark Schafers</Caption>
            </FooterContainer>
        </AboutContainer>
    );
};
