import React, { useState } from "react";
import Styled from "styled-components";
import { withRouter } from "react-router-dom";
import LogoIcon from "../../assets/icons/Logo.svg";
import User from "../../assets/icons/userImage.svg";

const HeaderWrap = Styled.div`
  .header {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
	  align-items: center;
	  background-color: ${(props) => props.theme.newwhite};
    width: 100%;
	  height: 30vh;
	  color: white;
    &__top {
      display: flex;
      flex-direction: row;
      align-items: center;
      //justify-content: space-between;
      margin: 0 auto;
      height:150px;
    }
  }
  .header__top--logo{
    width: ${(props) => (props.path ? "300px" : "150px")};
    height:${(props) => (props.path ? "184px" : "81px")};
    margin-left:580px;
    cursor: pointer;
  }
  .header__top--user{
    display: flex;
    justify-content: center;
    width: 170px;
    height: 36px;
    margin-left: 400px;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    border-radius: 50px;
    background:${(props) => props.theme.newgray};
    font-size: 14px;
    font-family: "Apple Gothic";
    font-weight: 700;
  }
  .header__bottom{
    flex-direction: row;
    margin: 0 auto;
    display : ${(props) => (props.path ? "none" : "flex")};
    & > p {
      color:${(props) => props.theme.newgray};
      //color: ${(props) => (props.select ? "#3C4F7C" : "#7E7E7E")};
      box-sizing: border-box;
      padding:5px;
      border-bottom: 2px solid;
      font-family: "Apple Gothic";
      font-weight: 700;
      &:hover {
        cursor: pointer;
        color:${(props) => props.theme.newnavy};
      }
    }
    & p:nth-of-type(2) {
		margin-left: 100px;
	}
  }
  
`;

const Header = ({ history, location }) => {
  const path = location.pathname === "/" ? true : false;
  //const [select, setSelect] = useState(false);

  return (
    <HeaderWrap path={path}>
      <div className='header'>
        <div className='header__top'>
          <img
            className='header__top--logo'
            src={LogoIcon}
            alt='logo'
            onClick={() => {
              history.push("/");
            }}
          />
          <div className='header__top--user'>
            <img src={User} alt='profile' />
            <p>김솝트님, 안녕하세요!</p>
          </div>
        </div>
        <div className='header__bottom'>
          <p
            onClick={() => {
              history.push("/serious");
            }}
          >
            진지무새
          </p>
          <p
            onClick={() => {
              history.push("/humor");
            }}
          >
            유머무새
          </p>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default withRouter(Header);
