import styled from 'styled-components'
import { ContainerType } from './Types'

export const BookVisitContainer = styled.div`
  color: black;

  h3 {
    padding-left: 10px;
    margin: 0;
  }

  width: 100%;
  height: 100%;
  margin-bottom: 70px;
`

export const ChooseDayContainer = styled.div`
  overflow: scroll;
  display: flex;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const DayContainer = styled.div<ContainerType>`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 130px;
  padding: 20px;
  margin: 5px;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? '#22ff00' : 'rgba(136,136,136,0.25)')};

  span {
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
  }
`

export const ChooseTimeContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`

export const TimeContainer = styled.div<ContainerType>`
  border-radius: 20px;
  margin: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active && props.isInactive === false ? 'green' : 'lightgray'};
  filter: ${(props) => (props.isInactive ? 'contrast(175%) brightness(50%)' : '')};
  cursor: ${(props) => (props.isInactive ? 'not-allowed' : '')};
  pointer-events: ${(props) => (props.isInactive ? 'none' : '')};
`
