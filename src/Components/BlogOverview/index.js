'use client'

import Addnewblog from "../add-new-blog"
import Allblogs from "../all-blogs"

function BlogOverview() {
    return (
        <>
            <div className="min-h-screen flex flex-col  gap-10 bg-gradient-to-r from-purple-500 to-blue-600 ">
                <Addnewblog />
                <Allblogs />
            </div>
        </>
    )
}

export default BlogOverview
