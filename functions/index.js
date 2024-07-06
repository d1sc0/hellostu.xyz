const functions = require('firebase-functions');
const axios = require('axios');

exports.submitForm = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, email } = req.body;

  // Fetch the current JSON file from GitHub
  const repoOwner = 'd1sc0';
  const repoName = 'hellostu.xyz';
  const filePath = 'src/comments/comments.json';
  const githubToken = functions.config().github.token;

  const fileUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;
  const headers = {
    Authorization: `token ${githubToken}`,
    Accept: 'application/vnd.github.v3+json',
  };

  try {
    const fileResponse = await axios.get(fileUrl, { headers });
    const fileData = Buffer.from(fileResponse.data.content, 'base64').toString(
      'utf-8'
    );
    const jsonData = JSON.parse(fileData);

    // Append new data
    jsonData.push({ name, email });

    // Update the JSON file
    const updatedContent = Buffer.from(
      JSON.stringify(jsonData, null, 2)
    ).toString('base64');
    const updateResponse = await axios.put(
      fileUrl,
      {
        message: 'Update comments.json',
        content: updatedContent,
        sha: fileResponse.data.sha,
      },
      { headers }
    );

    res.json({ message: 'Data submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update JSON file' });
  }
});
