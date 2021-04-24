import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/'

export default function AddModal({ setShowAddModal }) {
  return (
    <Overlay>
      <ModalWrapper>
        <CloseIconWrapper>
          <CloseIcon onClick={() => setShowAddModal(false)} />
        </CloseIconWrapper>
        <ButtonsWrapper>
          <AuthorButton variant='contained' color='secondary'>
            Add New Author
          </AuthorButton>
          <BookButton variant='contained' color='primary'>
            Add New Book
          </BookButton>
        </ButtonsWrapper>
      </ModalWrapper>
    </Overlay>
  )
}

export const CloseIconWrapper = styled.div`
  /* border: 1px solid yellow; */
	text-align: right;
	padding: 15px;
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

export const ModalWrapper = styled.div`
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
  height: 40px !important;
  text-transform: capitalize !important;
`

export const BookButton = styled(Button)`
  width: 200px !important;
  height: 40px !important;
  text-transform: capitalize !important;
`

export const CloseIcon = styled(CloseCircleOutline)`
  /* border: 1px solid black; */
  width: 40px;
  color: #3f51b5;
  cursor: pointer;
`
