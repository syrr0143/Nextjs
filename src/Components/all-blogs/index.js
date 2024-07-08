const fetchlistofblog = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/all-blogs', {
            method: 'GET',
            cache: "no-store"
        });
        const result = await response.json();
        return result?.data;
    } catch (error) {
        return null;
    }
}

const Allblogs = async () => {
    const bloglist = await fetchlistofblog();
    console.log('thia ia kjdjfjkd', bloglist)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-[75%] mx-auto mb-4">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    )
}

export default Allblogs
