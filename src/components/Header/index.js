import React from "react";


import RMDBLogo from '../../images/LogoImg.svg'
import TMDBLogo from '../../images/TMDBLogoImg.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.style";



const Header = () =>  (
    <Wrapper>
        <Content> 
            <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
)

export default Header;