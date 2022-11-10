import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";

async function handler(req, res) {
  const { email, password, gender } = req.body;
  const bcrypt = require("bcryptjs");
  const hashedPassword = await bcrypt.hash(password, 5);
  // const payload = Math.floor(100000 + Math.random() * 900000) + "";
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
          password: hashedPassword,
          gender,
        },
      });
      res.json({ ok: true });
    }
  }
}

export default withHandler("POST", handler);
