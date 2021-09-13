import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import {Context} from './Context'
import './style.css'
reactDom.render(<Context><App/></Context>,document.getElementById('root'))