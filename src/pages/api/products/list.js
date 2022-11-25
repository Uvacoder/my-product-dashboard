export default async function handler(req, res) {
  const requestOptions = {
    headers: {
      'Authorization': `Basic ${process.env.HARPER_API_KEY}`,
    }
  }

  const url = `${process.env.HARPER_FUNCTIONS_URL}/products/skus/list`;

  const results = await fetch(url, requestOptions).then(r => r.json());

  res.status(200).json({
    products: results
  })
}