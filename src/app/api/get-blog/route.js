import connectToDb from "@/database";
import { Blog } from "@/models/blog.models";
import { NextResponse } from "next/server"

export async function GET() {
    try {
        await connectToDb();
        const extractallblogsfromdb = await Blog.find();
        console.log(extractallblogsfromdb)
        if (extractallblogsfromdb) {
            return NextResponse.json({
                success: true,
                message: 'all blogs extracted successfully '
            })
        }

        else {
            return NextResponse.json({
                success: false,
                message: "An error occurred while fetching data",
                data: extractallblogsfromdb
            });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "An error occurred while fetching data",
            data: extractallblogsfromdb
        });
    }
}