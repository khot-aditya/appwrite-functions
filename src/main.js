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

    // Call the Python script as a child process
    const pythonProcess = spawn("python3", [
      "your_script.py",
      username,
      password,
      chatID,
      message,
    ]);

    pythonProcess.stdout.on("data", (data) => {
      console.log(`Python script output: ${data}`);
      res.send(`Python script output: ${data}`);
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Error in Python script: ${data}`);
      res.status(500).send(`Error in Python script: ${data}`);
    });
    
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
