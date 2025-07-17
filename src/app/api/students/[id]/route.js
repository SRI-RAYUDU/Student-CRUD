import {connectDB} from '@/src/lib/dbConnect';
import Student from '@/models/Student';
import { NextResponse } from 'next/server';

export async function PUT(req,{params}){
  await connectDB();
  const body = await req.json();
  const student = await Student.findByIdAndUpdate(params.id,body,{new:true})
  return NextResponse.json(student);
}


export async function DELETE(req,{params}){
  await connectDB()
  await Student.findByIdAndDelete(params.id)
  return NextResponse.json(student)
}