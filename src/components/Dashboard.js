import React from 'react';
import styled from 'styled-components'
import Menu from './Menu';
import Editor from './Editor';
import Files from './Files';


function Dashboard() {

    // When items click on menu, change files and maybe editor.
    // When Files are clicked, change editor.
    return (
        <Div>
            <Menu />
        </Div>
    )
}

const Div = styled.div`
    border: none;
    height: 92vh;
    display: flex;
`

export default Dashboard;