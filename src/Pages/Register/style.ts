import styled from "styled-components";
import typography from "../../Styles/typography";
import LoginImg from "../../Assets/images/faded-logo.png";

export const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  font-family: ${typography.types.light};
  background: url(${LoginImg});
  background-repeat: no-repeat;
  background-position: right top;

  .backButton {
    width: 2%;
    margin-left: 20px;
    position: relative;
    cursor: pointer;
  }

  .imgTag {
    width: 5%;
    margin: 20px;
    position: relative;
}

`;
