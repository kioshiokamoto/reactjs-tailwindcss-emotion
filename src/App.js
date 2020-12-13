import React from "react";
import tw from "twin.macro";

const Input = tw.input`border hover:border-black `;

const Container = tw.div`container min-h-screen flex flex-col items-center justify-center`;
const Ul = tw.ul`flex space-x-6`;
const DivImg = tw.div`relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full`;
const Aimg = tw.a`block bg-white p-1 rounded-full transform hover:-rotate-6`;
const Img = tw.img`h-24 w-24 rounded-full`;
const Button = tw.button`absolute right-1 bottom-0 bg-blue-500 h-8 w-8 rounded-full text-2xl font-semibold border-2 flex justify-center items-center font-mono hover:bg-blue-700`;
const Li = tw.li`flex flex-col items-center space-y-1`;


const App = () => {
  return (
    <Container>
      <div className='mb-10'>
        <h1 className='text-6xl text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 py-3'>Instagram Stories</h1>
      </div>
      <Ul>
        <Li>
          <DivImg>
            <Aimg href="#">
              <Img src="https://placekitten.com/200/200" alt="gato cute" />
              <Button>+</Button>
            </Aimg>
          </DivImg>
          <a href="#">You</a>
        </Li>
        <Li>
          <DivImg>
            <Aimg href="#">
              <Img src="https://placekitten.com/200/201" alt="gato cute" />
            </Aimg>
          </DivImg>
          <a href="#">Kitty_Two</a>
        </Li>
        <Li>
          <DivImg>
            <Aimg href="#">
              <Img src="https://placekitten.com/200/202" alt="gato cute" />
            </Aimg>
          </DivImg>
          <a href="#">Kitty_Three</a>
        </Li>
        <Li>
          <DivImg>
            <Aimg href="#">
              <Img src="https://placekitten.com/200/203" alt="gato cute" />
            </Aimg>
          </DivImg>
          <a href="#">Kitty_Four</a>
        </Li>
      </Ul>
    </Container>
  );
};

export default App;
