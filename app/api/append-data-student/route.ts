import { NextResponse } from "next/server";
import notion from "../../../lib/notion";

export async function POST(request: Request) {
  try {
    console.log("DATABASE_ID_STUDENT:", process.env.DATABASE_ID_STUDENT);
    const { data } = (await request.json()) as {
      data: Record<string, any>;
    };
    const databaseId = process.env.DATABASE_ID_STUDENT;

    if (!databaseId) {
      return NextResponse.json(
        { error: "DATABASE_ID_STUDENT is not set in environment variables." },
        { status: 400 }
      );
    }

    if (!data || typeof data !== "object") {
      return NextResponse.json(
        { error: "Invalid data format." },
        { status: 400 }
      );
    }

    const programGoalsArray = Array.isArray(data.programGoals)
      ? data.programGoals
      : [];

    const multiSelectGoals = programGoalsArray.map((goal: string) => ({
      name: goal,
    }));

    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        "Student Name": {
          title: [
            {
              text: { content: data.studentName || "Unnamed" },
            },
          ],
        },
        Email: {
          rich_text: [
            {
              text: { content: data.email || "" },
            },
          ],
        },
        "University Year": {
          select: {
            name: data.universityYear || "Freshman",
          },
        },
        "Major / Program": {
          rich_text: [
            {
              text: { content: data.major || "" },
            },
          ],
        },
        "Startup Idea or Project Description": {
          rich_text: [
            {
              text: { content: data.ideaDescription || "" },
            },
          ],
        },
        "Industry / Sector": {
          rich_text: [
            {
              text: { content: data.industry || "" },
            },
          ],
        },
        Stage: {
          select: {
            name: data.stage || "Idea Validation",
          },
        },
        "Biggest Challenge": {
          rich_text: [
            {
              text: { content: data.biggestChallenge || "" },
            },
          ],
        },
        "Team Members": {
          rich_text: [
            {
              text: { content: data.teamMembers || "" },
            },
          ],
        },
        "Approx. Weekly Hours the Team Can Commit": {
          rich_text: [
            {
              text: { content: data.weeklyHours || "" },
            },
          ],
        },
        "Skills Within the Team": {
          rich_text: [
            {
              text: { content: data.skills || "" },
            },
          ],
        },
        "Why are you working on this idea?": {
          rich_text: [
            {
              text: { content: data.motivation || "" },
            },
          ],
        },
        "What are you looking for in a mentor?": {
          rich_text: [
            {
              text: { content: data.mentorExpectations || "" },
            },
          ],
        },
        "Preferred Mentorship Approach": {
          select: {
            name: data.mentorshipApproach || "Hands-on weekly calls",
          },
        },
        "What do you hope to achieve while in the Program": {
          multi_select: multiSelectGoals,
        },
      },
    });

    return NextResponse.json({ success: true, pageId: response.id });
  } catch (error: any) {
    console.error("Error appending data:", error);
    return NextResponse.json(
      { error: "Failed to append data to database." },
      { status: 500 }
    );
  }
}
