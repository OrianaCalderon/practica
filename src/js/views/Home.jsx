import React from "react";
import Menu from "../components/Menu.jsx";

const Home=()=>{
    return(
        <>
        <Menu/>
        <div className="container">
            <div className="row">
                <div className="col-12 my-2">
                    <h1 className="text-center">My contact list</h1>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 md-4 border boders-danger">
                    <form>
                        <div className="form-group my-3">
                            <label>Email:</label>
                            <input className="form-control" placeholder="Email" type="text"/>

                        </div>
                        <div className="form-group my-3">
                            <label>Name:</label>
                            <input className="form-control" placeholder="Name" type="text"/>

                        </div>
                        <div className="form-group my-3">
                            <label>Number:</label>
                            <input className="form-control" placeholder="Number" type="text"/>

                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary w-100 my-3">Save Contacts</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
        </>
    );
}

export default Home;