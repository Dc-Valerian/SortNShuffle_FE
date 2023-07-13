import { styled } from "styled-components";
import { Button } from "../components";
import { IoShuffleSharp } from "react-icons/io5";
import { AiOutlineSortAscending } from "react-icons/ai";

const LittleDescription = () => {
  return (
    <Main>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse harum
        dignissimos quia expedita quasi consequuntur, animi sed ex, laboriosam
        molestiae officia.
      </p>
      <ButtonWrap>
        <IoShuffleSharp />
        <Button
          text="get started"
          style="text-transform: capitalize; font-size: 15px; outline: none; border: 0;
          color: white;
          background-color: transparent;
          cursor: pointer;

        "
        />
        <AiOutlineSortAscending />
      </ButtonWrap>
    </Main>
  );
};

export default LittleDescription;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #f25f86, #a573c8);
  box-shadow: #f25f86 0px 7px 29px 0px;
  padding: 15px 27px;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  transition: all 500ms;

  &:hover {
    transform: scale(0.9);
  }

  @media screen and (max-width: 500px) {
    padding: 13px 20px;
    font-size: 15px;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 300px;
  background-color: #0c1014;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    width: 600px;
    text-align: center;
    color: #e6e6fa6c;
    font-size: 15px;
    margin-bottom: 30px;
    @media screen and (max-width: 500px) {
      width: 300px;
      font-size: 14px;
      text-align: center;
    }
  }
`;
