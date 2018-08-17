import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

let { SIGNATURE } = process.env;

export let createToken = async (userId) => 
  await jwt.sign(
    { userId },
    SIGNATURE,
    { expiresIn: '7d' }
  );

export let hashPassword = async (password) =>
  await bcrypt.hash(password, 10);

export let verifyPassword = async (password, hashed) =>
  await bcrypt.compare(password, hashed);