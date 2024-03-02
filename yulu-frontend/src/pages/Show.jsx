import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Profile from '../components/Profile';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';
import { useAuth } from '../context/AuthContext';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Show() {

  const { user : currentUser } = useAuth();
  const [user, setUser] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{

    if(currentUser?.role !== "admin"){
      navigate("/");
    }
    
    const getUser = async(id)=>{
      try {
        const url = `${BASE_URL}user/${id}`;
        const response = await axiosInstance.get(url);

        if (response.status === 200) {
          setUser(response.data?.user);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    getUser(id);
  },[]);

  return (
    <div className="d-flex flex-column justify-content-center h-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <Profile user={user} title={"User Profile"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show