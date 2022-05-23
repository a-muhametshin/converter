import React from 'react'
import { IconButton } from '@mui/material'
import { pop, push } from './currenciesToSlice'
import { useDispatch } from 'react-redux'
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const AddRemoveRowButton = ({ add }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(add ? push('') : pop())
  }

  return (
    <IconButton onClick={handleClick} color="primary" aria-label="upload picture" component="span">
       {add ? <AddCircleIcon/> : <RemoveCircleRoundedIcon/>}
    </IconButton>
  )
}

export default AddRemoveRowButton
