import React from "react";
import styled from "styled-components";

const Line = styled.div`
  white-space: pre-wrap;
`;

export default function CommandOutput({ lines }) {
  return (
    <>
      {lines.map((line, i) => (
        <Line key={i}>{line}</Line>
      ))}
    </>
  );
}