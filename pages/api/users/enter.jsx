import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";

async function handler(req, res) {
  console.log(req.body);
  res.json({ ok: true });
}

export default withHandler("POST", handler);
