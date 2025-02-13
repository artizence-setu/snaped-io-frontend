export const fetchCache = "force-no-store";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://video.a2e.ai/api/v1/anchor/character_list",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.A2E_API_KEY}`,
        },
        body: JSON.stringify({
          type: "custom",
        }),
      },
    );

    const data = await response.json();
    return NextResponse.json({ avatars: data.data });
  } catch (error) {
    console.error("Error fetching avatars:", error);
    return NextResponse.json(
      { error: "Failed to fetch avatars" },
      { status: 500 },
    );
  }
}
