import { addProject, getProjects, updateProject } from '@/helpers/helper';
import { IncomingForm } from 'formidable';
import cloudinary from '@/lib/cloudinary'

export const config = {
  api: {
    bodyParser: false, // Disable the default JSON body parser
  },
};

export default async function handler(req, res) {
    console.log(req.query.pid);
  const form = new IncomingForm();

  form.parse(req, async (error, fields, files) => {
    if (error) {
      res.status(500).json({ error: 'File upload failed.' });
      return;
    }

    // Access other form data (non-file inputs)
    var { name, category, description } = fields;
    name = JSON.parse(name[0]);
    category = JSON.parse(category[0])
    description = JSON.parse(description[0]);
    const data = {
      name, category, description
    }
    console.log(data);
    const { file } = files;
    console.log(file[0].filepath);
    if (!file) {
      res.status(400).json({ error: 'No file uploaded.' });
      return;
    }
    updateProject(req.query.pid,data).then((response) => {
        console.log(response);
        
            cloudinary.uploader.upload(`${file[0].filepath}`,{
                public_id: response.imagePublic_id,
              }).then((result) => {
                res.status(200).json({ message: 'Project updated successfully.' });
              }).catch(()=>{
                console.log("error");
                res.status(400).json({ message: 'Project updation failed' });
              })
        
    })
    


  });
}
