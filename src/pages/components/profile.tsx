import { useState } from "react";
import { GitHubSvg } from "../../assets/github";
import { LinkSVG } from "../../assets/link";
import { PessoasSVG } from "../../assets/pessoas";
import { WorksInSVG } from "../../assets/work";
import { useQuery } from "@tanstack/react-query";
import { GetProfile } from "../../api/get-profile";


interface ResponseGitHub {
  avatar_url: string
}

export function Profile(){
  const [picture, setPicture] = useState('')

  const { data: profile, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: GetProfile
  })

  if(isLoading){
    return null
  }

  return (
    <div className="w-[54rem] h-48 bg-base-post flex items-center justify-between rounded-md mt-[-5rem] shadow-md">

      <div className="pl-10">
        <img src={picture} className="rounded-md w-[261.04px]" />
      </div>

      <div className="px-8">
        <div className="flex items-center justify-between ">

          <h1 className="text-base-title text-xl font-bold">{profile?.name}</h1>
          <a href="https://www.github.com/ManuelBrito661" target="_blank" className="flex items-center gap-[0.475rem] text-blue font-bold text-sm border-b-2 border-transparent hover:border-b-2 hover:border-blue transition-all">
            <span className="text-xs">GITHUB</span>
            <LinkSVG />
          </a>
            
        </div>

        <p className="text-base-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ratione quia deserunt in, cupiditate asperiores eveniet labore iure dignissimos earum.</p>
        
        <div className="flex items-center mt-6 gap-x-6">

          <div className="flex gap-1">
            <GitHubSvg />
            <p className="text-sm text-base-subtitle">ManuelBrito661</p>
          </div>

          <div className="flex gap-1">
            <WorksInSVG />
            <p className="text-sm text-base-subtitle">Rocketseat</p>
          </div>

          <div className="flex gap-1">
            <PessoasSVG />
            <p className="text-sm text-base-subtitle">32 seguidores</p>
          </div>

        </div>
      </div>
    </div>
  )
}