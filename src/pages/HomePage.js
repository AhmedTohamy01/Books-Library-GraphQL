import styled from 'styled-components'

export default function HomaPage() {
  return (
    <PageWrapper>
      <Title>Books Library</Title>
    </PageWrapper>
  )
}

/*---> Styles <---*/
export const PageWrapper = styled.div`
  border: 1px solid red;
	height: 1000px;
`

export const Title = styled.div`
  /* border: 1px solid red; */
	font-size: 50px;
	font-weight: bold;
	text-align: center;
	margin-top: 20px;
`