import BaseController from './BaseController.js'
import upload from '../../../providers/multer.js'
import multer from 'multer'
import { exec } from 'child_process'
import axios from 'axios'
import FormData from 'form-data'
import fs from 'fs'
import Image from '../../Models/Image.js'

class ConvertController extends BaseController
{

    static index(req, res)
    {
        return res.render('convert')
    }

    static async convert(req, res)
    {
        upload.single('file')(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({error: 'Multer Error: ' + err.message})
            } else if (err) {
                return res.status(500).json({error: 'Unknown Error: ' + err.message})
            }

            const fileUploadPath = req.file.path
            const imageOriginalPath = await ConvertController.uploadFile(fileUploadPath)
            exec(`python3 -W ignore /var/www/AlimeGAN/_script/script.py -s ${fileUploadPath}`, {maxBuffer: 1024 * 10000},
                async () => {
                    fs.unlinkSync(fileUploadPath)

                    const data = req.body
                    const path = await ConvertController.uploadFile('result.png')
                    const authed = req.session.authed

                    const image = await Image.create({
                        label: data.label,
                        path: path,
                        isPublic: authed == null ? true : (data.isPublic === 'on'),
                        userId: authed == null ? null : authed._id,
                        imageOriginalPath: imageOriginalPath,
                    })

                    res.redirect(`/convert?result=${image._id}`)
                }
            )
        })


    }

    static async uploadFile(path)
    {
        const headers = {
            Authorization: `Bot ${process.env.BOT_TOKEN}`,
            'Content-Type': 'multipart/form-data',
        };
        const formData = new FormData()
        formData.append('a', fs.createReadStream(path))
        const response = await axios.post(`https://discord.com/api/v9/channels/981061995719692335/messages`, formData, {headers})

        return response.data.attachments[0].url
    }

    static async showResult(req, res)
    {
        const image = await Image.findById(req.params._id)
        if (image == null) {
            return res.status(404).json({status: false, message: 'Result not found or you do not have access'})
        }

        return res.render('result', {
            layout: null,
            image: image.path,
        })
    }

}

export default ConvertController