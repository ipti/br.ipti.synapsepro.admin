import styled from "styled-components";
import styles from "../../../Styles";

export const Container = styled.div`
  color: ${styles.colors.grayClear};
  font-size: ${styles.typography.font.extraSmall};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .boxQuantity {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: ${styles.typography.font.extraSmall};
    padding: 7px;
    border-radius: 12px;
    height: 20px;
    margin-right: 8px;
    min-width: 20px;
    text-align: center;
  }
`;
