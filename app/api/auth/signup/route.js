import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

export async function POST(req) {
    try {
        await dbConnect();
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return Response.json({ error: 'Please provide name, email and password' }, { status: 400 });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return Response.json({ error: 'User already exists' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET || 'fallback_secret',
            { expiresIn: '1d' }
        );

        const cookie = serialize('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400,
            path: '/',
        });

        return Response.json(
            { success: true, user: { id: user._id, name: user.name, email: user.email } },
            {
                status: 201,
                headers: { 'Set-Cookie': cookie }
            }
        );
    } catch (err) {
        console.error('Signup Error:', err);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
