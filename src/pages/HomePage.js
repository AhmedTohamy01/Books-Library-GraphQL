import React, { useState } from 'react'
import styled from 'styled-components'
import BookList from '../components/BookList/BookList'
import Display from '../components/Display/Display'
import { PlusCircle } from '@styled-icons/boxicons-solid/'
import AddModal from '../components/AddModal/AddModal'

export default function HomaPage() {
  const [bookID, setBookID] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <PageWrapper>
      <Title>Books Library</Title>
      <ContentWrapper>
        <LeftWrapper>
          <BookList setBookID={setBookID} />
        </LeftWrapper>
        <RightWrapper>
          <Display bookID={bookID} />
        </RightWrapper>
      </ContentWrapper>
      <AddIcon onClick={() => setShowAddModal(true)} />
      {showAddModal ? <AddModal setShowAddModal={setShowAddModal} /> : null}
    </PageWrapper>
  )
}

/*---> Styles <---*/
export const PageWrapper = styled.div`
  /* border: 1px solid red; */
`

export const Title = styled.div`
  /* border: 1px solid red; */
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`

export const ContentWrapper = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
`

export const LeftWrapper = styled.div`
  /* border: 1px solid green; */
  width: 65%;
  padding: 30px;
`

export const RightWrapper = styled.div`
  /* border: 1px solid black; */
  width: 35%;
  padding: 30px;
`

export const AddIcon = styled(PlusCircle)`
  /* border: 1px solid black; */
  width: 70px;
  position: fixed;
  left: 93vw;
  bottom: 10px;
  color: #3f51b5;
  cursor: pointer;
`
