import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { TextField } from '@mui/material';

import { AuthContext } from '../context/AuthContext';
import { facilityInput } from '../Data/formSource';

const NewFacility = () => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  const axiosInst = axios.create({ 
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        token: "Bearer " + user.token,
    },

})

  const handleClick = async(e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'dczars');
    try {
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dmxz3k6o4/image/upload", data)
      const { url } = uploadRes.data;
      const newFacility = {
        title,
        img: url,
      }

      await axiosInst.post('/api/facilities', newFacility);
      navigate('/facilities');
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="m-2 md:m-10 mt-24 p-[20px] md:p-10 bg-white rounded-3xl">
      <div>
        <h1 className="text-xl md:text-3xl font-extrabold tracking tight mb-[20px] dark:text-gray-400 capitalize">Add New Facility</h1>
        <div className="lg:flex lg:gap-5 ">
          <div className="lg:flex-1">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className='w-full rounded-lg object-cover'
            />
          </div>
          <div className="flex-[2] mt-5 lg:mt-0">
            <form className='w-full md:flex md:flex-wrap md:gap-[30px] justify-between px-3'>
              <div className="w-[45%] lg:w-[25%]">
                <label htmlFor="file" className='flex items-center gap-10px text-xl font-semibold'>
                  Image: <DriveFolderUploadOutlinedIcon className="cursor-pointer" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className='lg:w-[65%] w-full mt-4 mb-4'>
                <TextField
                  onChange={(e) => setTitle(e.target.value)}
                  // value={facilityInput.placeholder}
                  className="w-full"
                  placeholder={facilityInput.placeholder}
                  label={facilityInput.label}
                  variant="outlined"
                  id={facilityInput.id}
                  type={facilityInput.type}
                />
              </div>
              <div className="w-[100%] flex justify-end lg:pr-4">
                <button className="py-[10px] px-[20px] text-white bg-teal-800 font-body cursor-pointer rounded-sm" onClick = {handleClick}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewFacility;