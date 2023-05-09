import logo from './logo.svg';
import { styled } from 'styled-components';
import './App.css';


const Box = styled.div`
  display: flex;
  width:100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: lightcoral;

  font-size: 4em;
  color:#fff;
  font-weight: bold;
`
function App() {
  return (
    <>
      <Box>테스트 스타일 컴포넌트</Box>
    </>
  );
}

export default App;
