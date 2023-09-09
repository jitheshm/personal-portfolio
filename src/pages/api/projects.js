import { getProjects } from "@/helpers/helper"

export default function handler(req, res) {
  getProjects().then((response) => {
    
    res.status(200).json({ projects: response })
  })
    
  }