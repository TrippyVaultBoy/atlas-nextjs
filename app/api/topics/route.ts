import { fetchTopics } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const topics = await fetchTopics();
        return NextResponse.json(topics);
    } catch (error) {
        console.error("Error fetching topics:", error);
        return NextResponse.json({message: "Error fetching topics"});
    }
}