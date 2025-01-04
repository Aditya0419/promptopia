import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const GET = async (req, {params}) => {
  try {
    await connectToDB();
    const { userId } = await params
    const prompts = await Prompt.find({
        creator:userId
    }).populate('creator')
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response("Failed to Fetch all prompts", {
      status: 500,
    });
  }
};
