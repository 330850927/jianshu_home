import styled from 'styled-components';
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
    border-bottom:1px solid #f0f0f0;
`;
export const HeaderContent = styled.div`
    min-width:768px;
    max-width:1440px;
    margin:0 auto;
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
    padding-right:50px;
    box-sizing:border-box;
`;
export const NavItem=styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;
export const SearchWrapper=styled.div`
    float:left;
    position:relative;
    >.iconfont{
        position:absolute;
        z-index:10;
        bottom:5px;
        right:5px;
        width:30px;
        line-height:30px;
        border-radius:50%;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`;
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    outline:0;
    border:1px solid #eee;
    border-radius:40px;
    background:#eee;
    margin-top:9px;
    margin-left:20px;
    padding:0 35px 0 20px;
    font-size:14px;
    color:#777;
    box-sizing:border-box;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;
export const SearchInfo=styled.div`
    position:absolute;
    left:20px;
    top:56px;
    width:240px;
    padding:0 20px;
    background:#fff;
    height:100px;
    border:1px solid #f0f0f0;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
`;
export const Addition=styled.div`
    position:absolute;
    z-index:10;
    right:0;
    top:0;
    height:56px;
`;
export const Button=styled.div`
    float:right;
    line-height:36px;
    height:38px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 22px;
    font-size:15px;
    box-sizing:border-box;
    &.reg{
        color:#ec6149;
    }
    &.reg:hover{
        background:#FEF7F6;
    }
    &.writing{
        color:#fff;
        background:#ec6149;
    }
`;