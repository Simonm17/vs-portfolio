import React from 'react';
import styled from 'styled-components'
import Editor from './Editor';

function Files({data, comp}) {

    return (
        <FileStyle>
            <List>
                {comp}
                {data}
            </List>
            <Editor />
        </FileStyle>
    );
}

const FileStyle = styled.div`
    display: flex;
`
const List = styled.div`

`

export default Files;