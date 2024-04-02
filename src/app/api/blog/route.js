import { Post } from "@/lib/model";
import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";

export const GET = async (request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
