import React, {useState} from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faAddressBook, faDrumstickBite, faPlay, faCog, faCopy, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Files from './Files';

function Menu() {

    const [data, setData] = useState('');

    const Llist = {
        Resume: {
            'id': 1,
            'icon': faCopy,
            'data': '',
        },
        Projects: {
            'id': 2,
            'icon': faAddressBook,
            'data': '',
        },
        Youtube: {
            'id': 3,
            'icon': faPlay,
            'data': '',
        },
        Contact: {
            'id': 4,
            'icon': faAddressCard,
            'data': '',
        },
        Bio: {
            'id': 5,
            'icon': faUserCircle,
            'data': ''
        },
        Setting: {
            'id': 6,
            'icon': faCog,
            'data': ''
        }
    }

    const mainIcons = () => {
        const l = [];
        for (const [key, value] of Object.entries(Llist)) {
            console.log(key, value);
        }
        console.log(l)
        return l
    }
    return (
        <>
        <ButtonStyle>
            <BtnGroupStyle>
                {mainIcons}
            </BtnGroupStyle>
            <LastBtnGroup>
                {mainIcons}
            </LastBtnGroup>
        </ButtonStyle>
        <Files />
        </>
    );
}

const ButtonStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    a:hover {
        color: white;
        cursor: pointer;
    }
    a {
        font-size: 26px;
    }
    a:visited, a:link{ 
        color: #b3b5b8
    }
`

const LastBtnGroup = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 35%;
    color: #b3b5b8;
    background-color: #272822;
    border: none;
    a {
        margin: 15px 10px;
    }
`

const BtnGroupStyle = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-height: 40%;
    color: #b3b5b8;
    background-color: #272822;
    a {
        margin: 15px 10px;
    }
    border: none;
`



export default Menu;