import React,{Component} from "react";
import {CSSTransition} from 'react-transition-group';
import {connect} from "react-redux";
import {actionCreators} from './store';
import {
    HeaderWrapper,
    HeaderContent,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    Addition,
    Button,

} from './style';

class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <HeaderContent>
                    <Logo/>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载APP</NavItem>
                        <NavItem className='right'>登录</NavItem>
                        <NavItem className='right'>
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={this.props.focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                    className={this.props.focused?'focused':''}
                                    onFocus={this.props.handleInputFocus}
                                    onBlur={this.props.handleInputBlur}
                                >

                                </NavSearch>
                            </CSSTransition>
                            <i
                                className={this.props.focused?'focused iconfont':'iconfont'}
                            >&#xe614;</i>
                            <SearchInfo>

                            </SearchInfo>
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className='writing'>
                            <i className="iconfont">&#xe61e;</i>
                            写文章
                        </Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </HeaderContent>
            </HeaderWrapper>
        )
    }
}
const mapState=(state)=>{
    return{
        focused:state.getIn(['header','focused'])
    }
};
const mapDispatch=(dispatch)=>{
    return{
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
};

export default connect(mapState,mapDispatch)(Header);