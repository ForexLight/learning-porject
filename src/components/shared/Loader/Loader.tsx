import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`
const LoaderStyled = styled.div`
  svg {
    color: black;
    animation: rotate 2s linear infinite;

    circle {
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

const Loader: FunctionComponent = () => (
  <LoaderContainer>
    <LoaderStyled>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={60}
        height={60}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='12' cy='12' r='10' />
      </svg>
    </LoaderStyled>
  </LoaderContainer>
)

export default Loader
