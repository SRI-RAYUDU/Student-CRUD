import connectDB from "@/src/lib/dbConnect";
import Student from "@/src/models/Student";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const students = await Student.find();
  return NextResponse.json(students);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const student = await Student.create(body);
  return NextResponse.json(student);
}
