import { useDispatch } from "react-redux"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <>
      <JournalLayout>
        {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure dolor laborum accusantium alias iste, perferendis id obcaecati repellat commodi facilis at nostrum vitae vel ipsa earum consequuntur consequatur soluta!</Typography> */}

        {/* Nothing selected */}
        <NothingSelectedView/>
        
        {/* NoteView */}
        {/* <NoteView/> */}

        <IconButton
          onClick={ onClickNewNote }
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>

      </JournalLayout>
           
    </>
  )
}
