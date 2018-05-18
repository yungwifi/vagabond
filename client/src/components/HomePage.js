import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

const splash = styled.div`
img{
    align-self: center;
    display: flex;
}
`

class HomePage extends Component {
    render() {
        return (
            <splash>
            <div>
            <img src="Atlanta.jpg" alt="atlanta" />
                Vagabond home page.
            </div>
            </splash>
        )
    }
}

export default HomePage