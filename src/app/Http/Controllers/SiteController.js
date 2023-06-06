import BaseController from './BaseController.js'
import Image from '../../Models/Image.js'

class SiteController extends BaseController
{

    static index(req, res)
    {
        return res.render('index')
    }

    static async gallery(req, res)
    {
        const overviews = await Image.aggregate([
            {
                $match: {
                    isPublic: true,
                    isShow: true,
                }
            },
            {
                $group: {
                    _id: {
                        year: { $year: '$createdAt' },
                        month: { $month: '$createdAt' },
                        rawMonth: {
                            $switch: {
                                branches: [
                                    { case: { $eq: [{ $month: '$createdAt' }, 1] }, then: 'January' },
                                    { case: { $eq: [{ $month: '$createdAt' }, 2] }, then: 'February' },
                                    { case: { $eq: [{ $month: '$createdAt' }, 3] }, then: 'March' },
                                    { case: { $eq: [{ $month: '$createdAt' }, 4] }, then: 'April' },
                                    { case: { $eq: [{ $month: '$createdAt' }, 5] }, then: 'May' },
                                    { case: { $eq: [{ $month: '$createdAt' }, 6] }, then: 'June' },
                                    { case: { $eq: [{ $month: '$createdAt' }, 7] }, then: 'July' },
                                    { case: { $eq: [{ $month: '$createdAt' }, 8] }, then: 'August' },
                                    { case: { $eq: [{ $month: '$createdAt' }, 9] }, then: 'September' },
                                    { case: { $eq: [{ $month: '$createdAt' }, 10] }, then: 'October' },
                                    { case: { $eq: [{ $month: '$createdAt' }, 11] }, then: 'November' },
                                    { case: { $eq: [{ $month: '$createdAt' }, 12] }, then: 'December' }
                                ],
                                default: 'Unknown'
                            }
                        }
                    },
                    count: { $sum: 1 }
                },
            },
            {
                $sort: {
                    '_id.year': -1,
                    '_id.month': -1
                }
            }
        ])
        const images = await Image.find({
            $expr: {
                $and: [
                    { $eq: [{ $year: '$createdAt' }, req.query.year ?? (new Date).getFullYear()] },
                    { $eq: [{ $month: '$createdAt' }, req.query.month ?? (new Date).getMonth() + 1] }
                ]
            }
        }).lean()

        return res.render('gallery', {
            overviews: overviews,
            images: images,
        })
    }


}

export default SiteController