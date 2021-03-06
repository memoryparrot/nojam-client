import React, { Component } from "react";
import Styled from "styled-components";
import { commentApi } from "../libs/api";
import SeriousComment from "../Components/common/SeriousComment";
import SeriousImg from "../assets/icons/Serious.svg";

const SeriousContainer = Styled.div`
    position :relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding-bottom: 5vh;
    top: 0;
    background-color: ${(props) => props.theme.newwhite};
`;

const ImageContainer = Styled.div`
    width: 100vw;
    height: 35vh;
    .content{
        height: 100%;
        width: 100vw;
    }
`;

const TitleContainer = Styled.div`
    width: 80vw;
    height: 15vh;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    .title {
        width: 33%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 1rem;
        &__name{
        font-family: "Apple Gothic";
        font-weight: 500;
        font-size: 24px;
        color: ${(props) => props.theme.newnavy};
        }
        &__subname{
        font-family: "Apple Gothic";
        font-weight: 300;
        font-size: 18px;
        color: ${(props) => props.theme.textGray};
        }
        &__btncontainer{
            width: 60%;    
            display: flex;
            justify-content: space-between;
            &__btn{
            font-family: "Apple Gothic";
            font-weight: 600;
            font-size: 14px;
            height: 28px;
            width: 70px;
            border: solid 1.5px ${(props) => props.theme.newnavy};
            background-color: white;
            border-radius: 50px;
            
            :hover {
                box-shadow: 0px 20px 40px rgba(0,0,0,0.2);
                transform: scale(1.03,1.03);
                cursor: pointer;    
            }
            }
        }

    }

`;

const ContentWrapper = Styled.div`
    display: flex;
    justify-content: space-around;
    width: 80vw;
`;

const ContentRow = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
`;

export default class Serious extends Component {
  state = {
    resultArray: null,
    error: false,
    loading: true,
  };
  async componentDidMount() {
    try {
      const { data: resultArray } = await commentApi.getSerious();
      this.setState({ resultArray });
    } catch {
      this.setState({ error: "Can't find serious commment information" });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { resultArray } = this.state;
    console.log(resultArray);
    const Hello = resultArray?.filter((item) => item.division === "?????????");
    const Context = resultArray?.filter((item) => item.division === "??????");
    const Conclusion = resultArray?.filter(
      (item) => item.division === "?????????"
    );
    return (
      <SeriousContainer>
        <ImageContainer>
          <img className='content' src={SeriousImg} alt='seriousImg' />
        </ImageContainer>
        <TitleContainer>
          <div className='title'>
            <div className='title__name'>?????? ????????????</div>
            <div className='title__subname'>?????? ????????? ?????? ????????????????</div>
            <div className='title__btncontainer'>
              <button className='title__btncontainer__btn'>??????/??????</button>
              <button className='title__btncontainer__btn'>?????????</button>
              <button className='title__btncontainer__btn'>??????</button>
            </div>
          </div>
          <div className='title'>
            <div className='title__name'>?????? ????????????</div>
            <div className='title__subname'>?????? ?????? ????????? ?????????????</div>
            <div className='title__btncontainer'>
              <button className='title__btncontainer__btn'>??????</button>
              <button className='title__btncontainer__btn'>??????</button>
              <button className='title__btncontainer__btn'>??????</button>
            </div>
          </div>
          <div className='title'>
            <div className='title__name'>?????? ????????????</div>
            <div className='title__subname'>
              ?????? ?????? ???????????? ???????????? ????????????
            </div>
            <div className='title__btncontainer'>
              <button className='title__btncontainer__btn'>?????????</button>
              <button className='title__btncontainer__btn'>?????????</button>
              <button className='title__btncontainer__btn'>?????????</button>
            </div>
          </div>
        </TitleContainer>
        <ContentWrapper>
          {Hello && Hello.length > 0 && (
            <ContentRow>
              {Hello.map((result) => (
                <SeriousComment
                  key={result._id}
                  parrot={result.parrot}
                  division={result.division}
                  category={result.category}
                  sentence={result.sentence}
                />
              ))}
            </ContentRow>
          )}
          {Context && Context.length > 0 && (
            <ContentRow>
              {Context.map((result) => (
                <SeriousComment
                  key={result._id}
                  parrot={result.parrot}
                  division={result.division}
                  category={result.category}
                  sentence={result.sentence}
                />
              ))}
            </ContentRow>
          )}
          {Conclusion && Conclusion.length > 0 && (
            <ContentRow>
              {Conclusion.map((result) => (
                <SeriousComment
                  key={result._id}
                  parrot={result.parrot}
                  division={result.division}
                  category={result.category}
                  sentence={result.sentence}
                />
              ))}
            </ContentRow>
          )}
        </ContentWrapper>
      </SeriousContainer>
    );
  }
}
