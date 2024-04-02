import { Post } from "@/lib/model";
import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
