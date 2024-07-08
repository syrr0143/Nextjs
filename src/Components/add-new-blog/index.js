import { NextResponse } from "next/server";
import { useState } from "react"
import { toast } from 'react-hot-toast'
function Addnewblog() {
    const [loading, setloading] = useState(false);
    const initialformdata = {
        title: '',
        description: ''
    }
    const [formdata, setformdata] = useState(initialformdata)

    const handlechange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    }
    const handlesubmitform = async (e) => {
        try {
            e.preventDefault();

            setloading(true);
            if (!formdata.title || !formdata.description) {
                toast.error('Please fill all fields')
                setloading(false)
                return;
            }
            const apiresonse = await fetch('/api/add-blog', {
                method: "POST",
                body: JSON.stringify(formdata)
            })
            const result = await apiresonse.json();
            console.log('result is ', result)
            if (apiresonse.ok) {
                toast.success('Blog added successfully')
                setloading(false)
                setformdata(initialformdata);
                console.log(apiresonse)
            }


        } catch (error) {
            setloading(false)
            console.error(error.message);
            setformdata(initialformdata);
            toast.error('there is some error in posting blog , please try again later')
            return NextResponse.json({
                success: false,
                message: ' there is some error in posting blog , please try again later'
            })
        }
    }

    const closeModal = () => {
        document.getElementById('my_modal_1').close();
    };
    return (
        <>
            <div className="mx-auto my-8">

                <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Add new blog</button>
                <dialog id="my_modal_1" className="modal">

                    <div className="modal-box">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-lg mb-4">Create New Blog!</h3>
                            <button className="modal-close btn bg-gray-700 text-white hover:bg-white hover:text-black" onClick={closeModal}>Close</button>
                        </div>
                        <div className="modal-action">
                            <form method="dialog" onSubmit={handlesubmitform} className="mx-auto flex flex-col">
                                <label className="font-bold text-lg mb-4" htmlFor="title">Title</label>
                                <input type="text" name="title" placeholder="Type title here" className="input input-bordered w-full mb-4" value={formdata.title} onChange={handlechange} />
                                <label className="font-bold text-lg mb-4" htmlFor="title">Description</label>
                                <textarea className="textarea textarea-bordered min-h-32" name="description" value={formdata.description} placeholder="Add description for you blog" onChange={handlechange}></textarea>

                                {loading ? <button type="submit" className="w-32 mx-auto m-4 btn bg-gray-700 text-white hover:text-black"><span className="loading loading-ball loading-lg"></span></button> : <button type="submit" className="w-32 mx-auto m-4 btn bg-gray-700 text-white hover:text-black">Submit</button>}

                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

        </>
    )
}

export default Addnewblog

