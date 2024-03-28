import styled from "styled-components";
import typography from "../../Styles/typography";
import color from "../../Styles/colors";
import Background from "../../Assets/images/background-signup.png";
import styles from "../../Styles";

export const ContainerLogin = styled.div`
     width: 100%;
    height: 100%;
    font-family: ${typography.types.light};
    background-repeat: no-repeat;
    background-position: right top;
    position: fixed;

    .TextLarge{
      font-family: ${styles.typography.types.bold};
font-size: 45.85px;
font-weight: 800;
line-height: 46.54px;
text-align: left;

    }

    .divBlue {
    background: linear-gradient(0deg, #336AE9, #336AE9);
    opacity: 0.60;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
    border-bottom-left-radius: 40px;
    border-top-left-radius: 40px;
  }

  .imgBack {
  height: 100%;
  font-size: ${typography.font.small};
  color: ${color.white};
  background: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  position: fixed;
  border-bottom-left-radius: 40px;
    border-top-left-radius: 40px; 
  }

  .formSignUp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .resetPassword {
    color: ${color.blue};
    z-index: 100;
    font-size: ${typography.font.small};
    font-family: ${typography.types.inter};
    padding-top: 40;
    padding-bottom: 40;
    margin-right: 20;
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 280px;
  }
  .buttonLogin {
    margin-top: 30px;
    border-style: solid;
    border-width: 2px;
    border-radius: 25px;
    padding: 10px;
    font-family: ${typography.types.regular};
  }

  .link {
    font-family: ${typography.types.bold};
    color: ${color.blue};
    text-decoration: none;
    margin-left: 5px;
  }


  .pLogin {
    font-family: ${styles.typography.types.inter};
font-size: 16.25px;
font-weight: 500;
line-height: 20.9px;
text-align: left;

  }
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
    margin-left: 20
  };
`;
export const TopColors = styled.div<{ color: string }>`
    width: 25%;
    height: 4px;
    background: ${props => props.color}
`;



