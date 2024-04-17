import styled from "styled-components";
import color from "../../Styles/colors";
import typography from "../../Styles/typography";

export const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  font-family: ${typography.types.light};
  background-repeat: no-repeat;
  background-position: right top;
  position: fixed;
  height: 100%;
  .contentStart {
    color: ${color.grayClear};
    font-family: ${typography.types.inter};
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
    margin-top: 16px;

    margin-left: 20px;
    position: relative;
    cursor: pointer;
  }

  .imgLogo {
    width: 20%;
    margin: 20px;
    position: relative;
  }
  .imageRegistration {
    height: 16%;
    width: 16%;
  }

  @media (max-width: 639px) {
    .imageRegistration {
      height: 50%;
      width: 50%;
    }

    .backButton {
      width: 10%;
    }
    .imgLogo {
      width: 60%;
    }
  }
`;
