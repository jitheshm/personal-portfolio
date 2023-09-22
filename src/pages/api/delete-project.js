import { deleteProject } from "@/helpers/projectHelper";
import cloudinary from "@/lib/cloudinary";


export default function handler(req, res) {
  const { pid } = req.query
  //console.log(pid[0]);
  console.log(pid);
  deleteProject(pid).then((response) => {
        cloudinary.uploader.destroy(response.imagePublic_id).then((result) => {
            res.status(200).json({ message: 'Project deleted successfully.' });
        })
        
  })
    
  }