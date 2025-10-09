import { NextRequest, NextResponse } from "next/server";
import { fetchAnswers } from "@/lib/data";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } } // ✅ don't destructure
) {
  try {
    const questionId = context.params.id;
    const answers = await fetchAnswers(questionId);

    return NextResponse.json(answers);
  } catch (error) {
    console.error("Error fetching answers:", error);
    return NextResponse.json(
      { error: "Failed to fetch answers" },
      { status: 500 }
    );
  }
}