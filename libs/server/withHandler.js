export default function withHandler(method, fn) {
  return async function (req, res) {
    if (req.method !== method) {
      //  method (get delete post) error
      return res.status(405).end();
    }
    try {
      await fn(req, res);
    } catch (error) {
      console.log(error);
      // server error
      return res.status(500).json({ error: error });
    }
  };
}
