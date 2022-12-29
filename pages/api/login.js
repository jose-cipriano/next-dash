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
            res.status(401).json({message: 'Login failed'})
        }

        const user = { isLoggedIn: true }
        req.session.user = user
        await req.session.save()
        res.json({
            success: true,
            user,
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default withIronSessionApiRoute(handler, sessionOptions)
