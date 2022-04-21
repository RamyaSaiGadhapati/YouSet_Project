import axios from 'axios';
import { useState } from 'react';

function Home() {
    const [insurancePackage, setinsurancePackage] = useState("Package#1")
    const [fillForm, setFillForm] = useState(false)
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState("Male")
    const [showMessage, setShowMessage] = useState(false)

    const changeForm = () => {
        setFillForm(!fillForm)
    }

    const handleSubmit = (event) => {
        setShowMessage(true)
        const data = {
            "insurancePackage": insurancePackage,
            "email": email,
            "age": age,
            "gender": gender, 
        }
        axios.post("www.example.com", data, {headers: {}})
        event.preventDefault()
    }

    return (
        <div>
            <h4>Welcome to YouSet, Please select a tenant insurance package to buy</h4>
            <form className="add-form">
                {!fillForm ? <div>
                    <div className="d-flex flex-column" >
                  <div>
                      <input type="radio" value="Package#1" name="Package" 
                        onChange={event => setinsurancePackage(event.target.value)}
                      /> <span>Proteco Insurance : 12.50$</span> 
                      <div className='px-3'>Our most affordable package. Your personal belongings will be covered up to 15k$. This is perfect if you own a few belongings.</div>
                  </div>
                  <div>
                      <input type="radio" value="Package#2" name="Package" 
                       onChange={event => setinsurancePackage(event.target.value)}                   
                      /> <span>Umbrella Insurance : 35.73$</span>
                      <div className='px-3'>Our most popular package. Your personal belongings will be covered up to 30k$. This package also includes a free water sensor to detect a water leak in your home.</div>
                  </div>
                  <div>
                      <input type="radio" value="Package#3" name="Package"
                        onChange={event => setinsurancePackage(event.target.value)}
                      /> <span>Thor insurance : 79.30$</span>
                      <div className='px-3'>Nothing but the best. Your personal belongings will be covered up to 100k$. It even includes a protection against an alien invasion.</div>
                  </div>
              </div>
              <button className="btn btn-primary"
               onClick={() => changeForm()}
               type="button"
               >
                Next
              </button>

                </div> : <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h6 className='mt-4'>Please fill form to complete your purchase</h6>
                    <div className='m-2' style={{width: "40%"}}>
                        <label className='px-3'>Email</label>
                        <input
                          type='email'
                          placeholder='Add Email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='m-2' style={{width: "40%"}}>
                        <label className='px-3'>Age</label>
                        <input
                          type='number'
                          placeholder='Add Age'
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className='m-2' style={{width: "40%"}}>
                        <label className='px-3'>Gender</label>
                        <select value={gender} onChange={(event) => setGender(event.target.value) }>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <button 
                        type='submit'
                        onClick={() => handleSubmit()}
                        className='px-3 btn btn-primary'
                    >
                        Submit
                    </button>
                    
                </div>}
              {showMessage && "You purchase is completed, Thank you"}
            </form>
      </div>
    );
  }
  
  export default Home;