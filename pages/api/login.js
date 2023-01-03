import clientPromise from '../../lib/mongodb'

import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'

async function handler(req, res) {
    try {
        const client = await clientPromise
        const db = client.db('next-dash')
        const { username, password } = await req.body
        const oneUser = await db.collection('Users').find({ username, password }).toArray()
        if (!oneUser.length) {
            res.status(200).json({ success: false, message: 'Invalid credentials' })
        }

        const user = { isLoggedIn: true }
        req.session.user = user
        await req.session.save()
        res.json({
            success: true,
            message: 'successfully signed in',
            user,
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export default withIronSessionApiRoute(handler, sessionOptions)
