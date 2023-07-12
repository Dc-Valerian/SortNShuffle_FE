import styled from "styled-components";
import { FC } from "react";
import style from "../../Types/interface";

const Button: FC<style> = ({ style, text }) => {
  return <ButtonProps values={style}>{text}</ButtonProps>;
};

export default Button;

const ButtonProps = styled.button<{ values: any }>`
  ${(props) => props.values}
`;
