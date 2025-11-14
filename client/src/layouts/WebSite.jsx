import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from '../component/Nav/TopNav'
import Nav from '../component/Nav/Nav'


const WebSite = () => {

    return (
        <div className="relative">
            <div className="">
                <TopNav />
                <Nav />
            </div>
            <div className="">
                <Outlet />
            </div>
            <div className="">
                footer
            </div>
        </div>
    )
}

export default WebSite
