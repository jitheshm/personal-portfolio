import { getProjects } from "@/helpers/helper"

export default function handler(req, res) {
  const { pid } = req.query
  //console.log(pid[0]);
  console.log(pid);
  getProjects(pid).then((response) => {
    
    res.status(200).json({ projects: response })
  }).catch(()=>{
    res.status(400).json({ message: 'get project failed.' });
  })
    
  }