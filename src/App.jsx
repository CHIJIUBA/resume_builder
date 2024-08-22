import { useState } from 'react'
import { TopBar } from './components/TopBar'
import { SideNav } from './components/SideNav'
import { ResumeBody } from "./components/ResumeBody";
import './App.css'

function App() {

  return (
    <>
      <TopBar />
      <div className={"maincontainer"}>
        <SideNav />
        <ResumeBody />
      </div>
    </>
  )
}

export default App
