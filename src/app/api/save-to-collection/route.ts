import { NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";

// Path to the collection JSON file
const filePath = path.join(process.cwd(), "src/app/data/caidees-collection.json");

export async function POST(req: Request) {
  try {
    const newFunko = await req.json();

    const fileData = await readFile(filePath, "utf-8");
    const currentCollection = JSON.parse(fileData);

    // Avoid duplicates based on title (you can change this logic)
    const alreadyExists = currentCollection.some((item: any) => item.title === newFunko.title);

    if (!alreadyExists) {
      currentCollection.push(newFunko);
      await writeFile(filePath, JSON.stringify(currentCollection, null, 2), "utf-8");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Failed to save Funko" }, { status: 500 });
  }
}
