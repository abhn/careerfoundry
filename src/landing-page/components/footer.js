import React, { Component } from 'react';
import { NavWrapper, NavInner, FooterText, NavCompany } from '../common-styles';

class Footer extends Component {
    render() {
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
}

export default Footer;