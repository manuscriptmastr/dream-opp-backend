import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';

let { SIGNATURE } = process.env;

export let createToken = async (userId) => 
  await jwt.sign(
    { userId },
    SIGNATURE,
    { expiresIn: '7d' }
  );