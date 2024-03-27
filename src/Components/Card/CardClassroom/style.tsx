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
    background-color: ${styles.colors.green};
    width: 64px;
    height: 24px;
    text-align: center;
    color: white;
    padding: 9px, 16px, 9px, 16px;
  }
`;
