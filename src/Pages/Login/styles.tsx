import styled from "styled-components";
import typography from "../../Styles/typography";
import color from "../../Styles/colors";

export const ContainerLogin = styled.div`
     width: 100%;
    height: 100%;
    font-family: ${typography.types.light};
    background-repeat: no-repeat;
    background-position: right top;
    position: fixed;

    #titleLogin {
    text-align: center;
    font-size: 24px;
    margin-bottom: -15px;
    color: ${color.colorsBaseInkNormal};
    font-family: ${typography.types.inter};
    font-weight: bold
  };

  #subTitleLogin {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    font-family: ${typography.types.inter};
    color: ${color.colorsBaseInkLight};
    
  }

  #margin {
    margin: 20px;
    position: absolute
  };

  #resetPassword {
    color: ${color.grayClear};
    font-size: ${typography.font.small};
    margin-top: 30;
    margin-bottom: 30;
    width: 100%;
  };
  #textCenter {
    text-align: "center"
  };
  #link {
    font-family: ${typography.types.bold};
    color: ${color.gray};
    text-decoration: none;
    margin-left: 5
  };
`;
export const TopColors = styled.div<{ color: string }>`
    width: 25%;
    height: 4px;
    background: ${props => props.color}
`;



