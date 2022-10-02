import React, { FunctionComponent } from 'react'
import { PlaceHolderNav, RadioGroup } from './FilterController.styles'
import Input from '../../../shared/Input/Input'
import { UserTypes } from '../../Types'

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
  <PlaceHolderNav data-testid='filter-component'>
    <Input isError label='' onChange={(e) => setSearchQuery(e.target.value)} placeholder='search' />
    <select name='selectUsers' id='selectUsers' onChange={(e) => setSelectId(e.target.value)}>
      <option value='0'>choose user</option>
      {users.map((i) => (
        <option value={i.id} key={i.id} data-testid='user-option'>
          user with {i.id}
        </option>
      ))}
    </select>
    <RadioGroup>
      <label htmlFor='choice1'>
        <input
          data-testid='choice-1'
          type='radio'
          id='choice1'
          name='filter'
          value='show liked'
          onClick={() => {
            setPage(0)
            setIsLikedShow(true)
          }}
        />
        Show liked
      </label>
      <label htmlFor='choice2'>
        <input
          data-testid='choice-2'
          type='radio'
          id='choice2'
          name='filter'
          value='Show all'
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
