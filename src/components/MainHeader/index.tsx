import React, {useMemo, useState} from 'react';

import emojis from '../../Utils/emojis';
import Toggle from '../Toggle';

import { useTheme } from '../../hooks/theme';

import { Container, Profile, UserName, Welcome } from './styles';

const MainHeader: React.FC = () => {

    const { toggleTheme, theme} = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * 8);
        return emojis[indice]
    },[]);
    
    return (

        <Container>

            <Toggle
                labelLeft='Light'
                labelRight='Dark'
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

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