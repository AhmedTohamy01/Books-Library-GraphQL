import { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/'
import TextField from '@material-ui/core/TextField'
import { useQuery, gql } from '@apollo/client'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default function Modal({ setShowModal }) {
  const [activeModal, setActiveModal] = useState('add')
  const [authorName, setAuthorName] = useState('')
  const [authorAge, setAuthorAge] = useState(null)
  const [bookName, setBookName] = useState('')
  const [bookGenre, setBookGenre] = useState('')
  const [bookAuthor, setBookAuthor] = useState('')

  const authors = gql`
    query {
      authors {
        name
      }
    }
  `
  const { loading, error, data } = useQuery(authors)

  return (
    <Overlay>
      {activeModal === 'add' ? (
        <AddModal>
          <CloseIconWrapper>
            <CloseIcon onClick={() => setShowModal(false)} />
          </CloseIconWrapper>
          <ButtonsWrapper>
            <AuthorButton
              variant='contained'
              color='secondary'
              onClick={() => setActiveModal('author')}
            >
              Add New Author
            </AuthorButton>
            <BookButton
              variant='contained'
              color='primary'
              onClick={() => setActiveModal('book')}
            >
              Add New Book
            </BookButton>
          </ButtonsWrapper>
        </AddModal>
      ) : activeModal === 'author' ? (
        <AuthorModal>
          <CloseIconWrapper>
            <CloseIcon onClick={() => setShowModal(false)} />
          </CloseIconWrapper>
          <StyledInput
            autoComplete='off'
            id='author-name'
            label='Author Name'
            type='text'
            variant='outlined'
            onChange={(event) => setAuthorName(event.target.value)}
          />
          <StyledInput
            autoComplete='off'
            id='author-age'
            label='Author Age'
            type='number'
            variant='outlined'
            onChange={(event) => setAuthorAge(event.target.value)}
          />
          <SubmitButton variant='contained' color='primary'>
            Submit
          </SubmitButton>
        </AuthorModal>
      ) : activeModal === 'book' ? (
        <BookModal>
          <CloseIconWrapper>
            <CloseIcon onClick={() => setShowModal(false)} />
          </CloseIconWrapper>
          <StyledInput
            autoComplete='off'
            id='book-name'
            label='Book Name'
            type='text'
            variant='outlined'
            onChange={(event) => setBookName(event.target.value)}
          />
          <StyledInput
            autoComplete='off'
            id='book-genre'
            label='Book Genre'
            type='text'
            variant='outlined'
            onChange={(event) => setBookGenre(event.target.value)}
          />
          <StyledSelect
            id='select-author'
            label='Author Name'
            variant='outlined'
            select
            SelectProps={{
              native: true,
            }}
            helperText='Select author from the list'
            onChange={(event) => setBookAuthor(event.target.value)}
          >
            <option value=''></option>
            {data.authors.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </StyledSelect>
          <SubmitButton variant='contained' color='primary'>
            Submit
          </SubmitButton>
        </BookModal>
      ) : null}
    </Overlay>
  )
}

export const AuthorModal = styled.div`
  /* border: 1px solid yellow; */
  margin: auto;
  width: 40%;
  max-width: 505px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`

export const BookModal = styled.div`
  /* border: 1px solid yellow; */
  margin: auto;
  width: 40%;
  max-width: 505px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`

export const StyledInput = styled(TextField)`
  width: 70% !important;
  height: 40px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-bottom: 50px !important;
`

export const StyledSelect = styled(TextField)`
  width: 70% !important;
  /* height: 40px !important; */
  margin-left: auto !important;
  margin-right: auto !important;
  margin-bottom: 50px !important;
`

export const SubmitButton = styled(Button)`
  width: 70% !important;
  height: 50px !important;
  text-transform: capitalize !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-bottom: 60px !important;
`

/*---> Styles <---*/
export const Overlay = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
`

export const AddModal = styled.div`
  /* border: 1px solid yellow; */
  margin: auto;
  width: 40%;
  max-width: 505px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  /* padding: 70px 35px; */
  display: flex;
  flex-direction: column;

  @media (max-width: 1160px) {
    width: 50%;
  }

  @media (max-width: 950px) {
    width: 60%;
  }

  @media (max-width: 800px) {
    width: 70%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 525px) {
    padding: 30px 15px 30px 15px;
  }
`

export const ButtonsWrapper = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 70px;
`

export const AuthorButton = styled(Button)`
  width: 200px !important;
  height: 50px !important;
  text-transform: capitalize !important;
`

export const BookButton = styled(Button)`
  width: 200px !important;
  height: 50px !important;
  text-transform: capitalize !important;
`

export const CloseIcon = styled(CloseCircleOutline)`
  /* border: 1px solid black; */
  width: 40px;
  color: #3f51b5;
  cursor: pointer;
`

export const CloseIconWrapper = styled.div`
  /* border: 1px solid yellow; */
  text-align: right;
  padding: 15px;
`
