import styled from 'styled-components';
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
    border-bottom:1px solid #f0f0f0;
`;
export const HeaderContent = styled.div`
    min-width:768px;
    max-width:1440px;
    margin:0 auto;
    background:rgba(0,0,0,0.2);
    height:56px;
    position:relative;
`;

export const Logo = styled.a.attrs({
    href:'/'
})`
    position:absolute;
    z-index:10;
    top:0;
    left:0;
    display:block;
    height:56px;
    width:100px;
    background:url(${logoPic});
    background-size:100%;
`;
export const Nav=styled.div`
    width:960px;
    height:56px;
    margin:0 auto;
    background:red;
`;