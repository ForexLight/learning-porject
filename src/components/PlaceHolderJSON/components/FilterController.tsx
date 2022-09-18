import React, { FunctionComponent } from 'react'
import { PlaceHolderNav, RadioGroup } from './FilterController.styles'
import Input from '../../shared/Input/Input'
import { UserTypes } from '../Types'

interface OwnProps {
  setSearchQuery: (i: string) => void
  users: UserTypes[]
  setSelectId: (i: string) => void
  setPage: (i: number) => void
  setIsLikedShow: (i: boolean) => void
}

type Props = OwnProps

const FilterController: FunctionComponent<Props> = ({
  setSearchQuery,
  users,
  setSelectId,
  setPage,
  setIsLikedShow,
}) => (
  <PlaceHolderNav>
    <Input isError label='' onChange={(e) => setSearchQuery(e.target.value)} placeholder='search' />
    <select name='selectUsers' id='selectUsers' onChange={(e) => setSelectId(e.target.value)}>
      <option value='0'>choose user</option>
      {users.map((i) => (
        <option value={i.id} key={i.id}>
          user with {i.id}
        </option>
      ))}
    </select>
    <RadioGroup>
      <label htmlFor='contactChoice1'>
        <input
          type='radio'
          id='contactChoice1'
          name='contact'
          value='email'
          onClick={() => {
            setPage(0)
            setIsLikedShow(true)
          }}
        />
        Show liked
      </label>
      <label htmlFor='contactChoice2'>
        <input
          type='radio'
          id='contactChoice2'
          name='contact'
          value='phone'
          onClick={() => {
            setPage(0)
            setIsLikedShow(false)
          }}
        />
        Show all
      </label>
    </RadioGroup>
  </PlaceHolderNav>
)

export default FilterController
