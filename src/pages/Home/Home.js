import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

import Search from '../Search/Search'

//Icons
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'


function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar src="" />
                </div>
            </div>

            <div className="home__body">
                <img alt="" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
                <div className="home_inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
