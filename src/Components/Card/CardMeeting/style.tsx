import styled from "styled-components";
import styles from "../../../Styles";

export const Container = styled.div`
  color: ${styles.colors.grayClear};
  font-size: ${styles.typography.font.extraSmall};
  justify-content: space-between;
  cursor: pointer;

  .boxQuantity {
    display: flex;
    color: white;
    font-size: ${styles.typography.font.extraSmall};
  }
  .boxYear {
    border-radius: 25px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    color: ${styles.colors.colorsBaseInkLighterActive};
  }
`;
