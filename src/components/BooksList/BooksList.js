import styled from 'styled-components'
import { Card, Button } from '@material-ui/core'

export default function BooksList() {

	

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
