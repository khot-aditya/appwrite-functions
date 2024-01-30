import { Client } from 'node-appwrite';
import { spawn } from "child_process"

export default async ({ req, res, log, error }) => {

  if (req.method === 'GET') {
    return res.send('Hello, World!');
  }

  if (req.method === 'POST') {
    
    const username = req.query.username;
    const password = req.query.password;
    const chatID = req.query.chatID;
    const message = req.query.message;
    
    return res.send(`Hello, World! ${username}${password}${chatID}${message}`);
  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
