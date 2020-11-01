import { Box, MenuItem, MenuList, Typography, Button, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Thanos from '../../assets/images/thanos.jpeg';
import Logo from '../../assets/images/avengers-logo.png';
import { AppContainer, ContainerChildren, ContainerMenu, CustomHeader, Image } from './styles';
import { Menu as IconMenu } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Metrics } from '../../theme';

const Menu: React.FC = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);
    const matches = useMediaQuery(`(max-width:${Metrics.md}px)`);

    const resetMenu = () => setShowMenu(false);

    useEffect(() => {
        resetMenu();
    }, [matches]);

    return (
        <>
            <CustomHeader elevation={1}>
                <img src={Logo} alt="Logo Avengers" />
                {matches && <IconButton color="secondary" aria-label="menu" onClick={() => setShowMenu(!showMenu)}>
                    <IconMenu />
                </IconButton>}
            </CustomHeader>
            <AppContainer>
                <ContainerMenu elevation={2} open={showMenu}>
                    <MenuList>
                        <Image elevation={2}>
                            <img src={Thanos} alt="Thanos Image Profile" className="margin-auto" />
                        </Image>
                        <MenuItem component={Link} to="/" onClick={resetMenu}>
                            <Typography color="textSecondary">
                                Dashboard
                    </Typography>
                        </MenuItem>
                        <MenuItem component={Link} to="/campaign" onClick={resetMenu}>
                            <Typography color="textSecondary">
                                Campaign
                </Typography>
                        </MenuItem>
                    </MenuList>
                </ContainerMenu>
                <ContainerChildren>
                    {children}
                </ContainerChildren>
            </AppContainer>
        </>

    )
}

export default Menu;