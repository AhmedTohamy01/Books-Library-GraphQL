import styled from 'styled-components'

export default function HomaPage() {
  return (
    <PageWrapper>
      <Title>Books Library</Title>
			<ContentWrapper>
				<LeftWrapper></LeftWrapper>
				<RightWrapper></RightWrapper>
			</ContentWrapper>
    </PageWrapper>
  )
}

/*---> Styles <---*/
export const PageWrapper = styled.div`
  border: 1px solid red;
`

export const Title = styled.div`
  /* border: 1px solid red; */
	font-size: 50px;
	font-weight: bold;
	text-align: center;
	margin-top: 20px;
`

export const ContentWrapper = styled.div`
  border: 1px solid yellow;
	display: flex;
`

export const LeftWrapper = styled.div`
  border: 1px solid green;
	height: 500px;
	width: 65%;
`

export const RightWrapper = styled.div`
  border: 1px solid green;
  height: 500px;
	width:35%;
`