import React from 'react';
import {
    Conteiner,
    Header,
    Icon,
    UserAvatar,
    UserAvatarButton,
    UserGreeting,
    UserInfo,
    UserInfoDetail,
    UserName,
    UserWrapper,
} from './styles';

import avatarDefault from '../../assets/avatar02.png';

export const Home: React.FunctionComponent = () => {
    return (
        <Conteiner>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <UserAvatarButton onPress={() => {}}>
                            <UserAvatar source={avatarDefault} />
                        </UserAvatarButton>
                        <UserInfoDetail>
                            <UserGreeting> Olá, </UserGreeting>
                            <UserName>Joe</UserName>
                        </UserInfoDetail>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>
        </Conteiner>
    );
};
