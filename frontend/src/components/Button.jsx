import React from 'react';
import styled from 'styled-components';

const Button = ({ onClick, text }) => {
  return (
    <StyledWrapper>
      <button className="cssbuttons-io-button" onClick={onClick}>
        {text}
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

export default Button;

const StyledWrapper = styled.div`
  display: flex;
  margin-left: -53px;
  width: 182%;

  .cssbuttons-io-button {
    background: linear-gradient(to right, #3b82f6, #9333ea);
    color: white;
    font-family: inherit;
    padding: 0.6em 1.5em;
    font-size: 18px;
    font-weight: 600;
    border-radius: 15px;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #714da6;
    overflow: hidden;
    position: relative;
    height: 2.5em;
    width: 280px; /* Increased width */
    max-width: 100%;
    padding-right: 4em;
    cursor: pointer;
    justify-content: center;
    transition: all 0.3s ease-in-out;
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.0em;
    width: 2.6em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    right: 0.3em;
    transition: all 0.3s;
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
  }

  .cssbuttons-io-button .icon svg {
    width: 1.2em;
    transition: transform 0.3s;
    color: #7b52b9;
  }

  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }
`;
