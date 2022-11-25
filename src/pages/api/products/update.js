export default async function handler(req, res) {
  const product = JSON.parse(req.body);

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${process.env.HARPER_API_KEY}`,
    },
    body: JSON.stringify({
      product
    })
  };

  const url = `${process.env.HARPER_FUNCTIONS_URL}/products/skus/update`;

  const results = await fetch(url, requestOptions).then(r => r.json());

  res.status(200).json({
    results
  })
}