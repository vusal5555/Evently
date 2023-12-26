// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;
// let cached = (global as any).mongoose || { conn: null, promise: null };

// export const connectToDatabase = async () => {
//   if (cached.conn) return cached.conn;

//   if (!MONGODB_URI) throw new Error("Mongodb_uri is missing");

//   cached.promise =
//     cached.promise ||
//     mongoose.connect(MONGODB_URI, {
//       dbName: "Mydatabase",
//       bufferCommands: true,
//     });

//   cached.conn = await cached.promise;

//   return cached.conn;
// };

import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    console.log("Mongo db url is not found");
  }
  if (isConnected) console.log("Already connected to mongodb");

  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
