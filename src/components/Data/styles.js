import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  padding: 20px;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Table = styled.table`
  width: 500px;
  border-bottom: 1px solid #404040;
  border-right: 1px solid #404040;
  border-spacing: 0;
  th {
    text-align: left;
    color: #404040;
    font-weight: bold;
    border: 1px solid #404040;
    border-right: 0;
    border-bottom: 0;
    padding: 10px;
  }

  td {
    border: 1px solid #404040;
    padding: 10px;
    border-bottom: 0;
    border-right: 0;
  }

  @media (max-width: 1100px) {
    width: 100%;
    max-width: 500px;
    margin-bottom: 40px;
  }
`;

export const PieWrapper = styled.div`
  display: flex;
  align-items: center;
  div {
    svg {
      height: 250px;
    }
  }
`;

export const Labels = styled.div`
  margin-left: 20px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  p {
    color: ${(props) => props.color || 'black'};
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  height: 20px;
  width: 20px;
  border-radius: 2px;
  background-color: ${(props) => props.color || 'black'};
`;
