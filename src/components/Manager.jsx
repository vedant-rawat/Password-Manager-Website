import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manager = (props) => {
  const [fetchedData, setFetchedData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    setFetchedData(data);
  };

  fetchData();
  }, [fetchedData]);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
      const doc = await fetch('http://localhost:3000', {method: 'POST', headers:{
        'Content-Type': 'application/JSON'
      }, body: JSON.stringify(data)} )
      
    // }
  };



  const [showP, setShowP] = useState("password");
  const showPass = () => {
    console.log(showP);
    setShowP((s) => {
      return s === "password" ? "text" : "password";
    });
  };

  // const [form, setForm] = useState([{name:"", password:""}])

  const notify = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to Clipboard!");
  };

  const deletePswd = async (data)=>{
    if(confirm("Do you want to Delete?"))
    {
      console.log(data)
      const doc = await fetch('http://localhost:3000', {method: 'DELETE', headers:{
        'Content-Type': 'application/json'
      }, body: JSON.stringify(data)} )
    }
  }
  

  return (
    <>
      
      <div className={`${props.bgc} ${props.txtc} flex flex-col items-center`}>
      <ToastContainer />
        <div className={`${props.bgc} ${props.txtc} p-4 rounded-lg w-full my-6`}>
          <h2 className={`${props.bgc} ${props.txtc} text-2xl font-bold mb-6 text-gray-800`}>Enter Details</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label className="block">SiteName</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="px-3 py-2 border rounded-md border-gray-300 w-full"
                placeholder="Enter SiteName"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>

            <div className="mb-6">
              <label className="block">Password</label>
              <input
                type={showP}
                {...register("password", { required: true })}
                className="px-3 py-2 border rounded-md border-gray-300 w-full"
                placeholder="Enter Password"
              />
              <p className="cursor-pointer text-sm" onClick={showPass}>
                {showP === "password" ? "Show" : "Hide"}
              </p>
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className=" bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className={`${props.bgc} ${props.txtc} w-full flex flex-col items-center justify-center`}>
          <h2 className="text-center my-4 font-bold text-xl">Your Passwords</h2>
          <table className={`border ${props.mode=='dark'?'border-white':'border-black'} m-4 w-full`}>
            <thead>
              <tr className={`border ${props.mode=='dark'?'border-white':'border-black'}`}>
                <th className={`border ${props.mode=='dark'?'border-white':'border-black'} px-4 py-2`}>Name</th>
                <th className={`border ${props.mode=='dark'?'border-white':'border-black'} px-4 py-2`}>Password</th>
                <th className={`border ${props.mode=='dark'?'border-white':'border-black'} px-4 py-2`}>Delete</th>
              </tr>
            </thead>
            <tbody>
              { 
              
                fetchedData.length>0 && fetchedData.map((p) => {
                  return (
                    <tr key={p._id} className={`border ${props.mode=='dark'?'border-white':'border-black'}`}>
                      <td className={`border ${props.mode=='dark'?'border-white':'border-black'} px-4 py-2`}>
                        <div className="flex justify-between items-center gap-4">
                          {p.name}
                          <span className="cursor-pointer flex justify-center items-center" onClick={()=>notify(p.name)}>
                            <lord-icon
                              src="https://cdn.lordicon.com/lyrrgrsl.json"
                              trigger="hover"
                              colors= {props.mode=='dark'?"primary:#ffffff":""}
                              style={{ width: "22px", height: "22px" }}
                            ></lord-icon>
                          </span>
                        </div>
                      </td>
                      <td className={`border ${props.mode=='dark'?'border-white':'border-black'} px-4 py-2`}>
                        <div className="flex justify-between items-center gap-4">
                          {p.password}
                          <span className="cursor-pointer flex justify-center items-center" onClick={()=>notify(p.password)}>
                            <lord-icon
                              src="https://cdn.lordicon.com/lyrrgrsl.json"
                              trigger="hover"
                              colors= {props.mode=='dark'?"primary:#ffffff":""}
                              style={{ width: "22px", height: "22px" }}
                            ></lord-icon>
                          </span>
                        </div>{" "}
                      </td>
                      <td className={`border ${props.mode=='dark'?'border-white':'border-black'} px-4 py-2`}>
                        <div className="flex justify-center items-center gap-4">
                          <span className="cursor-pointer flex justify-center items-center" onClick={()=>deletePswd(p)}>
                            <lord-icon
                              src="https://cdn.lordicon.com/wpyrrmcq.json"
                              trigger="hover"
                              colors= {props.mode=='dark'?"primary:#ffffff":""}
                              style={{ width: "22px", height: "22px" }}
                            ></lord-icon>
                          </span>
                        </div>{" "}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Manager;
