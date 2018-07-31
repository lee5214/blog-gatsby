/* global tw */
import styled, { keyframes, css } from 'react-emotion';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const fadeInQuick = keyframes `
  from {
    opacity:0;
    right:-100%;
  }
  to {
    opacity:.99;
    right:0;
  }
`
export const fadeOutQuick = keyframes `
  from {
    opacity:.99;
    right:0;
  }
  to {
    opacity:0;
    right:-100%;
  }
`

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

const upDownAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const upDownWideAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;


export const waveAnimation = css`
  animation: ${wave} 10s linear infinite alternate;
`;

