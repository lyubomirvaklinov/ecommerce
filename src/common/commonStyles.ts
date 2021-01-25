import styled from 'styled-components';

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexColumnDivCentered = styled(FlexColumnDiv)`
  justify-content: center;
  align-items: center;
`;

export const FlexRowDivCentered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const borderRadius10px = `border-radius: 10px`;
