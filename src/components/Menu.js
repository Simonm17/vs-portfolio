import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faAddressBook, faDrumstickBite, faPlay, faCog, faCopy, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Files from './Files';
import Resume from './Resume'
import Bio from './Bio'
import Projects from './Projects'
import Youtube from './Youtube'

function Menu() {

    const [data, setData] = useState('');
    const [comp, setComp] = useState('');

    useEffect(() => {
        console.log('sanity check');
    }, [setComp]);

    const List = [
        {
            'id': 1,
            'name': 'Resume',
            'title': 'Resume',
            'icon': faCopy,
            'data': [
                1,2,3
            ],
            'component': <Resume />
        },
        {
            'id': 2,
            'name': 'Projects',
            'icon': faAddressBook,
            'data': '',
            'component': <Projects />
        },
        {
            'id': 3,
            'name': 'Youtube',
            'icon': faPlay,
            'data': '',
            'component': <Youtube />
        },
        {
            'id': 4,
            'name': 'Contact',
            'icon': faAddressCard,
            'data': '',
            'component': ''
        },
        {
            'id': 5,
            'name': 'Bio',
            'icon': faUserCircle,
            'data': '',
            'component': <Bio />
        },
        {
            'id': 6,
            'name': 'Settings',
            'icon': faCog,
            'data': '',
            'component': ''
        }
    ]

    function sliceDice(list, start, end) {
        // take an array, return a map of the modified array that's been sliced
        // used for slicing up the icons for nav panel
        const newList = list.slice(start,end);
        return newList.map(a => <a onClick={() => handleNavClick(a)}><FontAwesomeIcon key={a.id} icon={a.icon} /></a>)
    }

    const handleNavClick = (a) => {
        // if currently selected panel is already up, turn it off by resetting state
        // if panel is selected and state is null or not the current panel, turn on panel.
        if (a.component == comp) {
            setComp('');
        } else {
            setComp(a.component);
            setData(a.data);
        }
    }


    return (
        <>
        <ButtonStyle>
            <BtnGroupStyle>
                {sliceDice(List, 0,4)}
            </BtnGroupStyle>
            <LastBtnGroup>
                {sliceDice(List, 4,6)}
            </LastBtnGroup>
        </ButtonStyle>
        <Files data={data} comp={comp}/>
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