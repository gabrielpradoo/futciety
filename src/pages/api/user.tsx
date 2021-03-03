import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../utils/database";

interface ErrorResponseType {
  error: string;
}

interface SuccessResponseType {
  name: string;
  email: string;
  cellphone: string;
  owner: boolean;
  properties: [];
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  if (req.method === "POST") {
    const { name, email, cellphone, owner, properties } = req.body;

    if (!owner) {
      if (!name || !email || !cellphone) {
        res.status(400).json({ error: "Missing body parameter" });
        return;
      }
    } else if (owner) {
      if (!name || !email || !cellphone || !properties) {
        res.status(400).json({ error: "Missing body parameter" });
        return;
      }
    } else {
      res.status(400).json({ error: "Missing body parameter" });
      return;
    }

    const { db } = await connect();
    const response = await db.collection("users").insertOne({
      name,
      email,
      cellphone,
      owner,
      properties: properties || [],
    });

    res.status(200).json(response.ops[0]);
  } else {
    res.status(400).json({ error: "Wrong request method" });
  }
};
