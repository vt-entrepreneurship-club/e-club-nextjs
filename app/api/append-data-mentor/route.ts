import { NextResponse } from "next/server";
import notion from "../../../lib/notion";

export async function POST(request: Request) {
  try {
    const { data } = (await request.json()) as {
      data: Record<string, any>;
    };
    const databaseId = process.env.DATABASE_ID_MENTOR;
    console.log("DATABASE_ID_MENTOR:", process.env.DATABASE_ID_MENTOR);
    if (!databaseId) {
      return NextResponse.json(
        { error: "DATABASE_ID_MENTOR is not set in environment variables." },
        { status: 400 }
      );
    }
    if (!data || typeof data !== "object") {
      return NextResponse.json(
        { error: "Invalid data format." },
        { status: 400 }
      );
    }
    const industryMultiSelect = Array.isArray(data.industryExpertise)
      ? data.industryExpertise.map((item: string) => ({ name: item }))
      : [];
    const functionalMultiSelect = Array.isArray(data.functionalExpertise)
      ? data.functionalExpertise.map((item: string) => ({ name: item }))
      : [];
    const communicationMultiSelect = Array.isArray(data.communicationStyle)
      ? data.communicationStyle.map((item: string) => ({ name: item }))
      : [];
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: { content: data.name || "Unnamed" },
            },
          ],
        },
        Email: {
          email: data.email || "",
        },
        "Phone Number": {
          rich_text: [{ text: { content: data.phoneNumber || "" } }],
        },
        "City / State": {
          rich_text: [{ text: { content: data.cityState || "" } }],
        },
        "Affiliation with University": {
          rich_text: [{ text: { content: data.affiliation || "" } }],
        },
        "Current Role / Title / Company": {
          rich_text: [{ text: { content: data.currentRole || "" } }],
        },
        "Experience in Field": {
          rich_text: [{ text: { content: data.fieldExperience || "" } }],
        },
        "Industry Expertise": {
          multi_select: industryMultiSelect,
        },
        "Functional Expertise": {
          multi_select: functionalMultiSelect,
        },
        "Meeting Availability": {
          select: {
            name: data.meetingAvailability || "2x per month",
          },
        },
        "Preferred Mentorship Approach": {
          select: {
            name: data.mentorshipApproach || "Hands-on with frequent check-ins",
          },
        },
        "Communication Style": {
          multi_select: communicationMultiSelect,
        },
        "Motivation to Mentor": {
          rich_text: [{ text: { content: data.motivationToMentor || "" } }],
        },
        "What do you hope to gain from mentoring?": {
          rich_text: [{ text: { content: data.gainsFromMentoring || "" } }],
        },
        "Consent to List": {
          select: {
            name: data.consentToList || "No",
          },
        },
        "Scheduling Constraints": {
          rich_text: [{ text: { content: data.schedulingConstraints || "" } }],
        },
        "Blacksburg Availability": {
          rich_text: [{ text: { content: data.blacksburgAvailability || "" } }],
        },
      },
    });
    console.log("Notion response:", response);
    return NextResponse.json({ success: true, pageId: response.id });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to append data to mentor database." },
      { status: 500 }
    );
  }
}
