import { fetchQuestions } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: RouteContext<'/api/topics/[id]/questions'>
) {
    try {
        const topicId = (await context.params).id;
        const questions = await fetchQuestions(topicId);
        
        return NextResponse.json(questions);
    } catch (error) {
        console.error("Error fetching questions:", error);
        return NextResponse.json({error: "Failed to fetch questions"});
    }
}