import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req, res) {
  const { email, password } = req.body;
  const bcrypt = require("bcryptjs");
  let user;
  if (email && password) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) res.json({ ok: false });
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (isMatchPassword) {
      req.session.user = {
        id: user.id,
      };
      await req.session.save();
      res.json({ ok: true });
    } else {
      res.json({ ok: false });
    }
  }
}

export default withApiSession(withHandler("POST", handler));
