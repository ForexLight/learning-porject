import styled from 'styled-components'
import { PopupStyledProps } from '../Types'

export const PopupStyled = styled.div<PopupStyledProps>`
  display: ${(props) => (props.popupActive ? 'flex' : 'none')};
  color: white;
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: calc(100% - 70px);
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.33);
`
export const PopupContent = styled.div`
  background-color: #ff0000;
  width: 100%;
  height: 80%;
  border-radius: 40px 40px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
