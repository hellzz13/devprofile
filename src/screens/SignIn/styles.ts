import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.dark};
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 24px;
`;

export const Logo = styled.Image`
    width: ${RFValue(160)}px;
    height: ${RFValue(160)}px;
    margin-bottom: ${RFValue(64)}px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
    margin-top: 24px;
`;

export const ForgotPasswordButtonTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray500};
`;
