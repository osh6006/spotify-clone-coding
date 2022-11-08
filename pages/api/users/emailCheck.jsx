import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";

async function handler(req, res) {
  const email = req.body;
  let user;
  console.log(email);
  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      console.log("user here");
      return res.json({ ok: true });
    } else {
      console.log("user not here");
      return res.json({ ok: false });
    }
  }
}

export default withHandler("POST", handler);
