import { addProject } from '@/helpers/helper';
import { IncomingForm } from 'formidable';
import cloudinary from '@/lib/cloudinary'

export const config = {
  api: {
    bodyParser: false, // Disable the default JSON body parser
  },
};

export default async function handler(req, res) {
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
    cloudinary.uploader.upload(`${file[0].filepath}`).then((result) => {

      console.log(result);
      data.imageUrl = `https://res.cloudinary.com/dsxnkdv2k/image/upload/${result.public_id}.${result.format}`
      data.imagePublic_id = result.public_id;
      addProject(data).then((response) => {
        res.status(200).json({ message: 'Project added successfully.' });
      }).catch((err) => {
        cloudinary.uploader.destroy(result.public_id).then((result) => {
          console.log(result);
          res.status(400).json({ message: 'Project added failed.' });
        })
      })
    }).catch(()=>{
      res.status(400).json({ message: 'Project added failed.' });
    })


  });
}
