import styled from "styled-components";
import typography from "../../Styles/typography";
import LoginImg from "../../Assets/images/faded-logo.png";
import color from "../../Styles/colors";

export const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  font-family: ${typography.types.light};
  background: url(${LoginImg});
  background-repeat: no-repeat;
  background-position: right top;
  .contentStart {
    color: ${color.grayClear};
    font-family: ${typography.types.inter};
    text-align: center;
    font-size: ${typography.font.small};
  }

  .contentStart p {
    margin: 0;
  }

  .contentStart h1 {
    color: ${color.gray};
    font-size: ${typography.font.medium};
  }

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
  .imageRegistration {
    height: 20%;
    width: 20%;
  }

  @media (max-width: 639px) {
    .imageRegistration {
      height: 50%;
      width: 50%;
    }

    .backButton {
      width: 10%;
    }
    .imgTag {
      width: 15%;
    }
  }
`;
