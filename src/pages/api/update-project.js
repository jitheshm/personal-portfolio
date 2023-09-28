import { updateProject } from '@/helpers/projectHelper';
import { IncomingForm } from 'formidable';
import cloudinary from '@/lib/cloudinary'

export const config = {
  api: {
    bodyParser: false, // Disable the default JSON body parser
    externalResolver: true
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.query.pid);
    const form = new IncomingForm();

    form.parse(req, async (error, fields, files) => {

      var data = {
        name: fields.name[0],
        category: fields.category[0],
        description: fields.description[0],
        language: fields.language[0],
        github: fields.github[0],
        host: fields.host[0],
      };
      console.log(data);
      const imagePublic_id = fields.imagePublic_id[0]
      const { image } = files;


      if (image) {
        cloudinary.uploader.upload(`${image[0].filepath}`, {
          public_id: imagePublic_id,
        })
          .then((response) => {
            console.log(response);
            console.log("hai");
            data={
              ...data,
              imageUrl:response.secure_url
            }
            console.log(data);
            return updateProject(req.query.pid, data)
          }).then((result) => {
            res.status(200).json({ message: 'Project updated successfully.' });
          }).catch((error) => {
            res.status(400).json({ error: 'failed',error });
          })
      } else {
        updateProject(req.query.pid, data).then((result) => {
          res.status(200).json({ message: 'Project updated successfully.' });
        }).catch(() => {
          res.status(400).json({ error: 'failed' });
        })
      }



    });
  }
}
