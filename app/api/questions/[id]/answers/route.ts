import { fetchAnswers } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: RouteContext<'/api/questions/[id]/answers'>
) {
  try {
    const questionId = (await context.params).id;
    const answers = await fetchAnswers(questionId);

    return NextResponse.json(answers);
  } catch (error) {
    console.error("Error fetching answers:", error);
    return NextResponse.json({ error: "Failed to fetch answers" }, { status: 500 });
  }
}