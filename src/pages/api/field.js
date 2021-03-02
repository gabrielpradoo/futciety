import nc from "next-connect";
import connectToDatabase from "../../utils/mongodb";

const handler = nc()
  .post(async (req, res) => {
    const {
      fieldName,
      propertyName,
      fieldImage,
      email,
      whatsapp,
      opening,
      closure,
      address,
      address2,
    } = req.body;

    const { db } = await connectToDatabase();
    const collection = db.collection("fields");

    await collection.insertOne({
      fieldName,
      propertyName,
      fieldImage,
      email,
      whatsapp,
      opening,
      closure,
      address,
      address2,
    });

    return res.status(200).json({
      ok: true,
    });
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default handler;
