import styled from 'styled-components'
import { Card, Button } from '@material-ui/core'
import { useQuery, gql } from '@apollo/client'

export default function BookList() {
  const allBooks = gql`
    {
      books {
        name
      }
    }
  `

  const { loading, error, data } = useQuery(allBooks)

  console.log('data:', data)

  if (loading) return <p className='loading'>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <Title>Click on any book to show the book's information</Title>
      <StyledCard elevation={2}>
        {data.books.map((item) => (
          <StyledButton variant='contained' color='primary'>
            {item.name}
          </StyledButton>
        ))}
      </StyledCard>
    </>
  )
}

/*---> Styles <---*/
export const StyledCard = styled(Card)`
  /* border: 1px solid red; */
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
`

export const StyledButton = styled(Button)`
  /* border: 1px solid red; */
  padding: 30px;
  margin: 10px !important;
  text-transform: capitalize !important;
`

export const Title = styled.div`
  /* border: 1px solid red; */
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
`
