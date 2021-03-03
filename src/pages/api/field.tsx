import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../utils/database";

interface ErrorResponseType {
  error: string;
}

interface SuccessResponseType {
  fieldName: string;
  propertyName: string;
  fieldImage: string;
  email: string;
  whatsapp: string;
  opening: string;
  closure: string;
  address: string;
  address2: string;
  city: string;
  state: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  if (req.method === "POST") {
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
      city,
      state,
      available_hours,
      appointments,
    } = req.body;

    if (
      !fieldName ||
      !propertyName ||
      !fieldImage ||
      !email ||
      !whatsapp ||
      !opening ||
      !closure ||
      !address ||
      !address2 ||
      !city ||
      !state ||
      !available_hours ||
      !appointments
    ) {
      res.status(400).json({ error: "Missing body parameter" });
      return;
    }
    const { db } = await connect();
    const response = await db.collection("fields").insertOne({
      fieldName,
      propertyName,
      fieldImage,
      email,
      whatsapp,
      opening,
      closure,
      address,
      address2,
      city,
      state,
      available_hours: available_hours || {},
      appointments: appointments || [],
    });

    res.status(200).json(response.ops[0]);
  } else {
    res.status(400).json({ error: "Wrong request method" });
  }
};
