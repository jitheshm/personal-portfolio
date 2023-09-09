import { getProjects } from "@/helpers/helper"

export default function handler(req, res) {
  const { pid } = req.query
  //console.log(pid[0]);
  getProjects(pid).then((response) => {
    
    res.status(200).json({ projects: response })
  })
    
  }