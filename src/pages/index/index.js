import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default class Index extends Component{


    render(){
        return (
            <div className="index-page">
                <Link to="/page2">123123123</Link>
                <div>index1</div>
            </div>
        )
    }
}
