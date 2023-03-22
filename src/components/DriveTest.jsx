import {  useEffect, useRef } from "react";
export default function DriveTest({setFormToggle}) {  
    const formRef = useRef(null)
    const closeForm = () => {
        setFormToggle(false);
    }
    useEffect(() => {
        const removeForm = (event) => {
            if(formRef.current && !formRef.current.contains(event.target)) {
                closeForm()
            }
        }
        document.addEventListener('mousedown', removeForm);
        return () => document.removeEventListener('mousedown', removeForm)
    }, []);
    return (
        <div className="form" ref={formRef}>
            <div className="form-header">
                <h2>Reserve For A Drive Test</h2>
            </div>
            <div className="form-body">
                <div>
                    <label htmlFor="email" className="email">
                        Email :
                    </label>
                    <input name="email" placeholder="Enter Your Email Here"  />
                </div>
                <div>
                    <label htmlFor="pnum">Phone Number :</label>
                    <input name="pnum" placeholder="Enter Your Phone Number Here"  />
                </div>
                <div>
                    <label htmlFor="adress">Adresse :</label>
                    <input name="adress" placeholder="Enter Your Adresse Here"  />
                </div>
            </div>
            <div className="form-footer">
                <button onClick={closeForm}>Cancel</button>
                <button className="submit" onClick={closeForm}>Submit</button>
            </div>
        </div>
    )
}

