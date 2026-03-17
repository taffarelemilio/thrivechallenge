import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  padding: 32px;
  background: #111827;
`;

export const Title = styled.h1`
  margin: 0 0 24px;
  font-size: 24px;
  text-align: center;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  border: 0;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 15px;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#30becb" : "#1f2937")};
  color: ${({ $active }) => ($active ? "#0b1220" : "#f9fafb")};

  &:hover {
    opacity: 0.6;
  }
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
`;

export const StateMessage = styled.span`
  padding: 24px 0;
  font-size: 16px;
`;
