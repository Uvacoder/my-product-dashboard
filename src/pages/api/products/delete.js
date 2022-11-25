export default async function handler(req, res) {
  const { id } = JSON.parse(req.body);

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${process.env.HARPER_API_KEY}`,
    },
    body: JSON.stringify({
      id
    })
  };

  const url = `${process.env.HARPER_FUNCTIONS_URL}/products/skus/delete`;

  const results = await fetch(url, requestOptions).then(r => r.json());

  res.status(200).json({
    results
  })
}