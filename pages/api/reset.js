import request from 'request'
import clientPromise from '../../lib/mongodb'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'

async function handler(req, res) {
    const client = await clientPromise
    try {
        const db = client.db('next-dash')
        const { username, password } = await req.body
        const users = db.collection('Users')
        const oneUser = await users.find({ username }).toArray()
        if (!oneUser.length) {
            res.status(401).json({ message: 'No Username' })
        } else {
            const filter = {username: username}
            const updateDoc = {
                $set: {
                    password: password
                }
            }
            await users.updateOne(filter, updateDoc);
        }

        res.status(200).json({ success: true })
    } catch (error) {
        res.status(500).json({ message: error.message })
    } 
}

export default withIronSessionApiRoute(handler, sessionOptions)
