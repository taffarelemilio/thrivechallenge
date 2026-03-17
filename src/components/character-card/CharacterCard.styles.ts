import styled from "styled-components";

export const Card = styled.article`
  overflow: hidden;
  border: 1px solid #374151;
  border-radius: 16px;
  background: #1f2937;
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 18px;
  color: #f9fafb;
`;

export const CardContent = styled.p`
  margin: 6px 0;
  color: #d1d5db;
  font-size: 14px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
`;
