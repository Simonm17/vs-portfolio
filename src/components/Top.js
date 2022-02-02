import React from 'react'
import styled from 'styled-components'
import { faDrumstickBite, faWindowMinimize, faWindowRestore, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Top() {

    const tabTexts = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];
    const tabs = tabTexts.map(txt=> {
            return <Button>{txt}</Button>
        })

    return (
        <TopStyle>
            <div className='div-1'>
                <button className='icon'><FontAwesomeIcon icon={faDrumstickBite} /></button>
                {tabs}
            </div>
            <div className='div-2'>
                Ryan.js - Portfolio Website
            </div>
            <div className='div-3'>
                <Button>
                    <FontAwesomeIcon icon={faWindowMinimize} />
                </Button>
                <Button>
                    <FontAwesomeIcon icon={faWindowRestore} />
                </Button>
                <Button className='xButton'>
                    <FontAwesomeIcon icon={faWindowClose}/>
                </Button>
            </div>
        </TopStyle>
    )
}

const Button = styled.button`
    font-size: 14px;
    color: #b3b5b8;
    border:none;
    text-align: center;
    text-decoration: none;
    padding: 2%;
    margin: 0;
    height: 100%;
    background-color: #202120;
    &:hover {
        background-color: #34352f;
    }
`

const TopStyle = styled.div`
    height: 8vh;
    color: #b3b5b8;
    background-color: #202120;
    font-size: 24px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: center;
    .icon {
        background-color: #202120;
        border: none;
        margin: 5px;
        font-size: 24px;
        color: maroon;
    }
    div {
        width: 33%;
    }
    .div-1 {
        display: flex;
        flex-wrap: nowrap;
        text-align:center;
    }
    .div-2 {
        text-align: center;
        cursor: default;
        margin-top: 10px;
        user-select: none;
    }
    .div-3 {
        text-align: end;
        button {
            padding: 0 25px;
            font-size: 22px;
        }
        
    }
    .Button:hover {
            background-color: rgb(192,0,0);
        }
`

export default Top;