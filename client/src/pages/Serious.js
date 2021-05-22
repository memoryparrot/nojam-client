import React, { Component } from "react";
import Styled from "styled-components";
import { userApi } from "../libs/api";
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
    const Hello = resultArray?.filter((item) => item.division === "첫인사");
    const Context = resultArray?.filter((item) => item.division === "본문");
    const Conclusion = resultArray?.filter((item) => item.division === "본문");
    return (
      <SeriousContainer>
        <ImageContainer>
          <img className='content' src={SeriousImg} alt='seriousImg' />
        </ImageContainer>
        <TitleContainer>
          <div className='title'>
            <div className='title__name'>우리 인사해요</div>
            <div className='title__subname'>어떤 인사로 말을 건네볼까요?</div>
            <div className='title__btncontainer'>
              <button className='title__btncontainer__btn'>아침/저녁</button>
              <button className='title__btncontainer__btn'>요일별</button>
              <button className='title__btncontainer__btn'>계절</button>
            </div>
          </div>
          <div className='title'>
            <div className='title__name'>우리 소통해요</div>
            <div className='title__subname'>어떤 말로 소통을 해볼까요?</div>
            <div className='title__btncontainer'>
              <button className='title__btncontainer__btn'>전달</button>
              <button className='title__btncontainer__btn'>질문</button>
              <button className='title__btncontainer__btn'>요청</button>
            </div>
          </div>
          <div className='title'>
            <div className='title__name'>우리 응원해요</div>
            <div className='title__subname'>
              기분 좋은 응원으로 마무리를 해보아요
            </div>
            <div className='title__btncontainer'>
              <button className='title__btncontainer__btn'>요일별</button>
              <button className='title__btncontainer__btn'>계절별</button>
              <button className='title__btncontainer__btn'>코로나</button>
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
