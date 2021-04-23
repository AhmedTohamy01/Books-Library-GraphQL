import styled from 'styled-components'
import { Card, Button } from '@material-ui/core'
import { useQuery, gql } from '@apollo/client'

export default function BookList() {
  const allBooks = gql`
    query getAllBooks {
      Books {
        name
      }
    }
  `

  return (
    <CustomCard elevation={2}>
      <CustomButton variant='contained' color='primary'>
        Hello
      </CustomButton>
    </CustomCard>
  )
}

/*---> Styles <---*/
export const CustomCard = styled(Card)`
  /* border: 1px solid red; */
  padding: 30px;
`

export const CustomButton = styled(Button)`
  /* border: 1px solid red; */
  padding: 30px;
`
