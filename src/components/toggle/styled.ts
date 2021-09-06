import styled from 'styled-components';

export const Knob = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 50px;
  height: 12px;
  width: 12px;
  transform-origin: left;
  transition: transform 200ms ease-in-out 0s;
`;

export const Container = styled.label`
  position: relative;
  width: 32px;
  display: block;

  &:active ${Knob} {
    transform: scaleX(1.4);
  }

  input {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;

    & + div {
      background-color: #d8dae5;
    }

    &:checked + div {
      background-color: #3366ff;

      ${Knob} {
        transform-origin: right;
      }
    }
  }
`;

// export const Knob = styled.div`
//   height: 16px;
//   width: 16px;
//   opacity: 0;
//   display: flex;
//   position: absolute;
//   padding-left: 4px;
//   transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.175) 0s;
//   align-items: center;
//   justify-content: center;
// `;

export const Control = styled.div`
  cursor: pointer;
  border-radius: 50px;
  height: 16px;
  width: 32px;
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
