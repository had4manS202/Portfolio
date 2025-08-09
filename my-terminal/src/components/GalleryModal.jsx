import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: fadeIn 0.3s ease;
`;

const Img = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border: 2px solid ${({ theme }) => theme.green};
`;

const Close = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  color: #fff;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default function GalleryModal({ src, onClose }) {
  return (
    <Overlay onClick={onClose}>
      <Close onClick={onClose}>×</Close>
      <Img src={src} alt="gallery" />
    </Overlay>
  );
}