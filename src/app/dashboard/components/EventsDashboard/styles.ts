import styled from "styled-components";

export const Content = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fafafa;
`;

export const Header = styled.div`
  margin-bottom: 1.5rem;
  h2 {
    color: #c65b1e;
  }
`;

export const TableContainer = styled.div`
  background: white;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.625rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    padding: 0.313rem 0.5rem;
  }

  thead {
    color: #cc623780;
    font-size: 0.813rem;
    font-weight: 500;
    border-bottom: 0.063rem solid #cc62371a;
  }

  tbody tr {
    border-bottom: 0.063rem solid #cc62371a;
  }

  tbody tr td {
    font-size: 0.75rem;
    font-weight: 400;
    color: #657593;
  }

  .dot {
    width: 0.625rem;
    height: 0.625rem;
    background-color: limegreen;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.375rem;

    &.red {
      background-color: red;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 400;
  color: #657593;
`;

export const Pagination = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;
`;

export const RowOptionsButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

export const PageNumber = styled.button<{ active: boolean }>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  height: 2.188rem;
  width: 2.188rem;
  border-radius: 12.5rem;
  border: none;
  background-color: ${({ active }) => (active ? "#CC6237" : "#F5F5F5")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const PreviousButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  height: 2.188rem;
  width: 4.688rem;
  border-radius: 12.5rem;
  border: none;
  color: #000000;
  font-size: 0.75rem;
  font-weight: 400;

  background-color: #f5f5f5;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const NextButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  height: 2.188rem;
  width: 4.688rem;
  border-radius: 12.5rem;
  border: none;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 400;

  background-color: #cc6237;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;
