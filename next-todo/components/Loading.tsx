import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .loadingSpinnerWrap {
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .loadingSpinner {
      margin: 0 auto;
      width: 15%;
      height: 15%;

      div {
        background: linear-gradient(white, white);

        .MuiCircularProgress-root {
          display: inline-block;
        }
        .MuiCircularProgress-static {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
        }
        .MuiCircularProgress-indeterminate {
          animation: MuiCircularProgress-keyframes-circular-rotate 1.4s linear
            infinite;
        }
        .MuiCircularProgress-determinate {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
        }
        .MuiCircularProgress-colorPrimary {
          color: #3f51b5;
        }
        .MuiCircularProgress-colorSecondary {
          color: #f50057;
        }
        .MuiCircularProgress-svg {
          display: block;
          animation: loading_animation 1.4s infinite;
        }
        .MuiCircularProgress-circle {
          stroke: currentColor;
        }
        .MuiCircularProgress-circleStatic {
          transition: stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
        }
        .MuiCircularProgress-circleIndeterminate {
          animation: MuiCircularProgress-keyframes-circular-dash 1.4s
            ease-in-out infinite;
          stroke-dasharray: 80px, 200px;
          stroke-dashoffset: 0;
        }
        .MuiCircularProgress-circleDeterminate {
          transition: stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
        }
        @keyframes MuiCircularProgress-keyframes-circular-rotate {
          0% {
            transform-origin: 50% 50%;
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes MuiCircularProgress-keyframes-circular-dash {
          0% {
            stroke-dasharray: 1px, 200px;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 100px, 200px;
            stroke-dashoffset: -15px;
          }
          100% {
            stroke-dasharray: 100px, 200px;
            stroke-dashoffset: -125px;
          }
        }
        .MuiCircularProgress-circleDisableShrink {
          animation: none;
        }
        @keyframes loading_animation {
          0% {
            color: #4285f4;
          }
          25% {
            color: #ea4335;
          }
          50% {
            color: #f9bb2d;
          }
          75% {
            color: #34a853;
          }
        }
      }
    }
  }
`;

const LoadSpinner: React.FC = () => {
  return (
    <Container>
      <div className="loadingSpinnerWrap">
        <div className="loadingSpinner">
          <div
            id="loading-indicator"
            role="progressbar"
            className="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate"
          >
            <svg viewBox="22 22 44 44" className="MuiCircularProgress-svg">
              {' '}
              <circle
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                stroke-width="3.6"
                className="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate"
              ></circle>
            </svg>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoadSpinner;
