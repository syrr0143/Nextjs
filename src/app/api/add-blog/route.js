import connectToDb from "../../../database/index.js"
import { Blog } from "../../../models/blog.models.js";
import Joi from "joi";
import { NextResponse } from "next/server";

const addnewblogSchema = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'Title is required.',
        'string.empty': 'Title cannot be empty.'
    }),
    description: Joi.string().required().messages({
        'any.required': 'Description is required.',
        'string.empty': 'Description cannot be empty.'
    }),
});

export async function POST(req) {
    try {
        await connectToDb();
        const extractblogdata = await req.json();
        const { title, description } = extractblogdata;
        if (!title || !description) {
            return NextResponse.json({
                success: false,
                message: 'Both title and description are mandatory.'
            });
        }
        const { error } = addnewblogSchema.validate({ title, description }, { abortEarly: false });
        if (error) {
            return NextResponse.json({
                success: false,
                message: error.details.map((detail) => detail.message).join('\n')
            });
        }
        const newblogitem = await Blog.create(extractblogdata);
        if (newblogitem) {
            return NextResponse.json({
                success: true,
                message: ' blog added successfully'
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: 'something went wrong '
            })
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong in posting blog, please try again'
        })
    }
}