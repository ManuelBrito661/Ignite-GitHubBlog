import { z } from "zod";
import { api } from "../lib/axios";


export interface ProfileInterface {
  name: string
  avatar_url: string
}

export interface GetProfileInterface {
  profile: ProfileInterface
}

const profileSchema = z.object({
  name: z.string(),
  avatar_url: z.string().url()
})


export async function GetProfile(){
  const profile = await api.get('https://api.github.com/users/ManuelBrito661')
  const followers = await api.get('https://api.github.com/users/ManuelBrito661/followers')


  const { name, avatar_url } = profileSchema.parse(profile.data)

  console.log(name)
  console.log(avatar_url)

  return {
    name, 
    avatar_url,
  }
}