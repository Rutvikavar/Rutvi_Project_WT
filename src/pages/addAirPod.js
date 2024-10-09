import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddEditAirPods() {
    const [data, setData] = useState({}); // Form data
    const [isEditMode, setIsEditMode] = useState(false); // To detect add or edit mode
    const { id } = useParams(); // For edit mode, if id is passed in the URL
    const navigate = useNavigate();

    useEffect(() => {
        // If there's an id in the params, we are in edit mode
        if (id) {
            setIsEditMode(true);
            const apiUrl = 'http://localhost:2222/Airpod/' + id;
            fetch(apiUrl)
                .then(res => res.json())
                .then(res => setData(res));
        }
    }, [id]);

    const handleSubmit = () => {
        const apiUrl = isEditMode
            ? 'http://localhost:2222/Airpod/' + id
            : 'http://localhost:2222/Airpod/';

        fetch(apiUrl, {
            method: isEditMode ? "PATCH" : "POST", // PUT for edit, POST for add
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(() => {
            navigate('/AirPod'); // Redirect to AirPod list after add/edit
        });
    };

    return (
        <>
            <h2>{isEditMode ? "Edit AirPod" : "Add AirPod"}</h2>
            {!isEditMode && (
    <div className="form-group row">
        <label htmlFor="text2" className="col-4 col-form-label">ID</label>
        <div className="col-8">
            <input
                onChange={(e) => setData({ ...data, id: e.target.value })}
                value={data.id || ""}
                type="text"
                className="form-control"
            />
        </div>
    </div>
)}
            <div className="form-group row">
                <label htmlFor="text1" className="col-4 col-form-label">AirPod Name</label>
                <div className="col-8">
                    <input
                        onChange={(e) => setData({ ...data, AirPodName: e.target.value })}
                        value={data.AirPodName || ""}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text4" className="col-4 col-form-label">Image URL</label>
                <div className="col-8">
                    <input
                        onChange={(e) => setData({ ...data, image: e.target.value })}
                        value={data.image || ""}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text3" className="col-4 col-form-label">Price</label>
                <div className="col-8">
                    <input
                        onChange={(e) => setData({ ...data, Price: e.target.value })}
                        value={data.Price || ""}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="form-group row">
                <div className="offset-4 col-8">
                    <button onClick={handleSubmit} className="btn btn-primary">
                        {isEditMode ? "Update" : "Submit"}
                    </button>
                </div>
            </div>
        </>
    );
}

export default AddEditAirPods;
