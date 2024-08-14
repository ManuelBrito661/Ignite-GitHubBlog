import { useState } from "react"
import { GitHubSvg } from '../assets/github'
import { WorksInSVG } from "../assets/work"
import { PessoasSVG } from "../assets/pessoas"
import { LinkSVG } from "../assets/link"
import { Posts } from "./components/posts"
import { Profile } from "./components/profile"




export  function App() {
  
  return (
    <div className="bg-base-background antialiased">

      <div className="flex justify-center ">
          <Profile />
      </div>
    
      <div className="flex justify-center">
        <Posts />
      </div>
      
    </div>
  )
}

