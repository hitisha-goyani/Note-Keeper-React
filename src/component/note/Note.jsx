import React from 'react'
import NoteInput from './NoteInput'
import NoteList from './NoteList'
import { ToastContainer } from 'react-toastify'

const Note = () => {
  return (
    <div>
      <NoteInput/>
      <NoteList/>
      <ToastContainer/>
    </div>
  )
}

export default Note
