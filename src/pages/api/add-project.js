import { addProject } from '@/helpers/projectHelper';
import { IncomingForm } from 'formidable';
import cloudinary from '@/lib/cloudinary'

export const config = {
  api: {
    bodyParser: false, // Disable the default JSON body parser
    externalResolver: true
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const form = new IncomingForm();

    form.parse(req, async (error, fields, files) => {
      if (error) {
        res.status(500).json({ error: 'File upload failed.' });
        return;
      }

      // Access other form data (non-file inputs)


      const data = {
        name: fields.name[0],
        category: fields.category[0],
        description: fields.description[0],
        language: fields.language[0],
        github: fields.github[0],
        host: fields.host[0],
      };
      console.log(data);
      const { image } = files;
      //console.log(image[0].filepath);
      if (!image) {
        res.status(400).json({ error: 'No file uploaded.' });
        return;
      }
      cloudinary.uploader.upload(`${image[0].filepath}`, { folder: "portfolio_website" }).then((result) => {

        console.log(result);
        data.imageUrl = `https://res.cloudinary.com/dsxnkdv2k/image/upload/${result.public_id}.${result.format}`
        data.imagePublic_id = result.public_id;
        addProject(data).then((response) => {
          res.status(200).json({ message: 'Project added successfully.' });
          //res.end()
        }).catch((err) => {
          cloudinary.uploader.destroy(result.public_id).then((result) => {
            console.log(result);
            res.status(400).json({ message: 'Project added failed.' });
          })
        })
      }).catch(() => {
        res.status(400).json({ message: 'Project added failed.' });
      })


    });
  }
}
