import React, {useState} from "react";
import Menu from "../components/Menu.jsx";

const Home=()=>{
    const [contactList,setContactList]=useState([]);
    const [contact,setContact]=useState({
        name:"", myPhoneNumber:"",email:""
    });
    const [error,setError]=useState(false);

    const addContact =(event)=>{
        
        setContact({...contact,[event.target.name]: event.target.value});
    };
    const saveContactList =(event)=>{
        
        if(contact.name.trim()!=="" && 
        contact.email.trim()!=="" && 
        contact.myPhoneNumber.trim()!==""
        ){
            setError(false)
            setContactList([...contactList, contact])

            setContact({name:"", myPhoneNumber:"",email:""
            
            })

        }else{
            setError(true)
        }
        
    
    }; 


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
                            <label>Name:</label>
                            <input className="form-control" 
                            placeholder="Name" 
                            type="text" 
                            onChange={addContact} 
                            name="name"
                            value={contact.name}/>

                        </div>
                        <div className="form-group my-3">
                            <label>Number:</label>
                            <input className="form-control" 
                            placeholder="Number" 
                            type="text" 
                            onChange={addContact} 
                            name="myPhoneNumber"
                            value={contact.myPhoneNumber}/>

                        </div>
                        <div className="form-group my-3">
                            <label>Email:</label>
                            <input className="form-control" 
                            placeholder="Email" 
                            type="text" 
                            onChange={addContact} 
                            name="email"
                            value={contact.email}/>

                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary w-100 my-3" type="button" onClick={saveContactList}>Save Contacts</button>
                        </div>
                    </form>
                </div>
                <div className="">{contactList.length<=0 ? "No tiene contactos" : "Contact " + contactList.length}</div>
                {error ? <div className="alert alert-danger">Hay un contacto inválido</div> : ""} 
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12  ">
                   {contactList.map((conta,index)=>{
                    return(
                        <div key={index} className="col-12  border contact-list my-2">
                            <div className="div contact-list-img">
                                <img src="https://picsum.photos/id/1004/80/80" alt="profile" />
                            </div>
                            <div className="div contact-list-datos">
                                <p><span>Name:</span>{conta.name}</p>
                                <p><span>Number:</span>{conta.myPhoneNumber}</p>
                                <p><span>Email:</span>{conta.email}</p>
                            </div>
                     </div>
                    )
                   })}
                     
                       
               </div>
            </div>
        </div>


        </>
    );
}

export default Home;