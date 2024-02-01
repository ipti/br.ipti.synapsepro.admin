import styled from "styled-components";
import styles from ".";

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  #space-between {
    justify-content: space-between;
  }
  #center {
    justify-content: center;
  }
  #start {
    justify-content: start;
  }
  #end {
    justify-content: end;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  #space-between {
    justify-content: space-between;
  }
  #center {
    justify-content: center;
  }
  #start {
    justify-content: start;
  }
  #end {
    justify-content: end;
  }
`;

interface PropsPadding {
  padding?: string;
}

export const Padding =styled.div<PropsPadding> `
    padding: ${(props: any) => props.padding || "4px"};
`;

export const Container = styled.div`
  min-height: 100%;
  height: auto;
  overflow-y: auto;
  width: 100%;
  padding: 4% 8%;
  font-size: ${styles.typography.font.medium};
  font-family: ${styles.typography.types.inter};
`;