const rp = require('request-promise');
const fs = require('fs');

const projectId = process.env.HYANIZE_PROJECT_ID;
const predictionKey = process.env.HYANIZE_PREDICTION_KEY;
const apiUrl = `https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/${projectId}/image`

const headers = {
    'Content-Type': 'application/octet-stream',
    'Prediction-Key': predictionKey,
};

async function predict() {
    console.log(headers);
    const bf = fs.createReadStream('test.png');
    const res = await rp.post({ url: apiUrl, headers: headers, body: bf, encoding: null });
    console.log(JSON.parse(res.toString()));
}

predict();