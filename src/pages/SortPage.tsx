import styled from "styled-components"

const SortPage = () => {
  return (
    <div>
      <Container>
        <Head>
          Shuffle Your Groups Here
        </Head>
       <Main>
       <Box>
          <textarea name="" id=""   placeholder="Enter the List You Want to be Shuffled"></textarea>
       <div>
       <Input>  <input type="text" /> <div>Yes</div></Input>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, error.
        </Text>
       <button>Submit</button>
       </div>
        </Box>
       </Main>
      </Container>
    </div>
  )
}

export default SortPage

const Input = styled.div`
display: flex;

div{
  background-color: yellow;
}
`

const Text = styled.div``

const But = styled.div`
width: 40px;
background-color: orange;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
margin:0;
`

const Box = styled.div`
background-color: red;
width: 100%;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
/* flex-direction: column; */

div{
/* background-color: green; */
    margin-left: 10px;
}

textarea{
  /* background-color: green; */
  width: 400px;
  height:150px;
  padding-left: 10px;


  ::placeholder{
    color: blue;
  }
}
`
const Main = styled.div`
background-color: blue;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
`

const Head = styled.div`
  background-color: grey;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 30px;
`

const Container = styled.div`
  background-color: #0c1014;
  height: 100vh;
  width: 100vw;
  /* color: white; */
  overflow: hidden;
`