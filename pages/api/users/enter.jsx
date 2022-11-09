import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";

async function handler(req, res) {
  const { email, password, gender } = req.body;
  let user;
  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });

    if (user) res.json({ ok: false });

    if (!user) {
      user = await client.user.create({
        data: {
          email,
          password,
          gender,
        },
      });
      res.json({ ok: true });
    }
    console.log("hihi~");
  }
}

export default withHandler("POST", handler);
