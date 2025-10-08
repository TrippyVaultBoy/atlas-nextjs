import { fetchAnswers } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request: Request, {params}: {params: {id: string}}) {
    try {
        const questionId = await params.id;
        const questions = await fetchAnswers(questionId);
        
        return NextResponse.json(questions);
    } catch (error) {
        console.error("Error fetching answers:", error);
        return NextResponse.json({error: "Failed to fetch answers"});
    }
}