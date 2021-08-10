import * as React from 'react';
import { Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

export const AboutContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.colours.bg.primary};
`;

export const TextContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.theme.space[4]};
`;

export const AboutScreen = () => {
    return (
        <AboutContainer>
            <TextContainer>
                <Paragraph>To be implemented...</Paragraph>
            </TextContainer>
        </AboutContainer>
    );
};
