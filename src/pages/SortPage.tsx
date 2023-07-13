import styled from "styled-components"
import { FiMail } from "react-icons/fi"


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
       <InputHolder>
                                <Input
                                    placeholder="Your User Name"
                                />
                                <IconMail />
                            </InputHolder>
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

const IconMail = styled(FiMail)`
margin-right: 5px;
font-size: 30px;
color: rgba(0,0,0,0.4);
height: 100%;

:hover{
  color: green;
  cursor:pointer;
}

`

const Input = styled.input`
outline: none;
border: none;
flex: 1;
border: 0;
padding-left: 10px;
height: 100%;
width: 100%;
background-color: brown;
`
const InputHolder = styled.div`
width: 100%;
height: 35px;
border: 1px solid silver;
border-radius: 5px;
display:flex;
align-items:center;
background-color: yellow;
`


// const Input = styled.div`
// display: flex;
// align-items: center;
// /* justify-content: center; */
// div{
//   background-color: yellow;
//   margin:0;
//   height: 25px;
//   width: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// input{
//   background-color: whitesmoke;
//   width: 150px;
//   height: 25px;
//   outline: none;
//   border: none;
// }
// `

const Text = styled.div`
background-color:purple;
width:230px ;
`


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
width: 90%;
height: 250px;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
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
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 30px;
`

const Container = styled.div`
  background-color: #0c1014;
  height: 100vh;
  width: 100%;
`