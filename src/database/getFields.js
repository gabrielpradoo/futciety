import connectToDatabase from "../utils/mongodb";

export async function getFields() {
  const { db } = await connectToDatabase();
  const data = await db.collection("fields").find().toArray();

  return data;
}
