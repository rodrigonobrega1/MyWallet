import React, {useMemo} from 'react';

import emojis from '../../Utils/emojis';
import Toggle from '../Toggle';

import { Container, Profile, UserName, Welcome } from './styles';

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * 8);
        return emojis[indice]
    },[]);
    
    return (

        <Container>

            <Toggle />

            <Profile>
                <Welcome>
                    Hello, {emoji}
                </Welcome>
                <UserName>
                    Rodrigo Nobrega
                </UserName>
            </Profile>
            
        </Container>
    );
} 

export default MainHeader;