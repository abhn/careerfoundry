import React from 'react';
import { NavWrapper, NavInner, FooterText, NavCompany } from '../common-styles';

/**
 * 
 */
const Footer = () => {
    return (
        <NavWrapper>
            <NavInner>
                <FooterText>
                    Made with &hearts; for <NavCompany><i>CAREER<b>FOUNDRY</b></i></NavCompany>
                </FooterText>
            </NavInner>
        </NavWrapper>
    )
}

export default Footer;