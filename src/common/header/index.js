import React,{Component} from "react";
import {
    HeaderWrapper,
    HeaderContent,
    Logo,
    Nav
} from './style';

class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <HeaderContent>
                    <Logo/>
                    <Nav>

                    </Nav>
                </HeaderContent>
            </HeaderWrapper>
        )
    }
}

export default Header;