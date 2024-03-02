/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import Profile from '../components/Profile';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Users() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetcAllUsers = async () => {
      try {
        const url = `${BASE_URL}user?role=user`;
        const response = await axiosInstance.get(url);

        if (response.status === 200) {
          setUsers(response.data.users);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    fetcAllUsers();
  }, [])

  return (
    <div className="d-flex flex-column justify-content-center h-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <Profile user={user}/>
          </div>
          {
            user?.role === "admin" && (
              <div className="col-lg-8">
                <div className="card">
                  <h2 className="card-title text-center">List Of All Users</h2>
                  <div className="card-body py-md-4">
                    <hr />
                    {
                      users.map((user,index) => (<div key={index}>
                        <div className="row">
                          <div className="col-sm-3">
                            <i className="bi bi-person" style={{ fontSize: "2rem" }}></i>
                          </div>
                          <div className="col-sm-3">
                            <p className="text-muted mb-0">{user?.username}</p>
                          </div>
                          <div className="col-sm-3">
                            <p className="text-muted mb-0">{user?.email}</p>
                          </div>
                          <div className='col-sm-3'>
                            <button type="button" className="btn btn-primary btn-sm" onClick={()=>{ navigate(`/user/${user?.id}`)}}>
                              <i className="bi bi-eye" style={{ fontSize: "1rem" }}></i>
                            </button>
                            <button type="button" className="btn btn-success btn-sm" style={{ marginLeft: '5px', marginRight: '5px' }}>
                              <i className="bi bi-pen" style={{ fontSize: "1rem" }}></i>
                            </button>
                            <button type="button" className="btn btn-danger btn-sm">
                              <i className="bi bi-trash" style={{ fontSize: "1rem" }}></i>
                            </button>
                          </div>
                        </div>
                        <hr />
                      </div>
                      ))}
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Users