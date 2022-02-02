import './App.css';
import styled from 'styled-components'
import {
  Routes,
  Route,
} from "react-router-dom";
import Top from './components/Top';
import Dashboard from './components/Dashboard';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Youtube from './components/Youtube';

function App() {
  return (
    <AppStyle>
        <Top />
        <Dashboard />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  height: 100vh;
`

export default App;
