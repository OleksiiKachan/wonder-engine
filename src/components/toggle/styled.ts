import styled, { css } from 'styled-components';

export const Knob = styled.div`
  background-color: var(--switch-knob-bg);
  border-radius: 50px;
  height: var(--switch-knob-size);
  width: var(--switch-knob-size);
  transform-origin: left;
  transition: transform 200ms ease-in-out 0s;
`;

export const Container = styled.label<{ isDisabled: boolean }>`
  --switch-width: calc(var(--switch-knob-size) + 20px);
  --switch-height: calc(
    var(--switch-knob-size) + 2 * var(--switch-inner-padding)
  );

  position: relative;
  width: var(--switch-width);
  display: block;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
      touch-action: none;
    `};

  &:active ${Knob} {
    transform: scaleX(1.4);
  }

  input {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;

    & + div {
      background-color: var(--switch-off-bg);
    }

    &:checked + div {
      background-color: var(--switch-on-bg);

      ${Knob} {
        transform-origin: right;
      }
    }
  }
`;

export const Control = styled.div`
  cursor: pointer;
  border-radius: 50px;
  height: var(--switch-height);
  width: var(--switch-width);
  color: white;
  transition: background-color 200ms ease-in-out 0s;

  > div {
    transition: transform 200ms ease-in-out 0s;
    transform: translateX(0%);
    width: 100%;
    display: flex;

    &[data-checked='true'] {
      transform: translateX(50%);
    }

    > div {
      padding: 2px;
      flex: 1;
    }
  }
`;
