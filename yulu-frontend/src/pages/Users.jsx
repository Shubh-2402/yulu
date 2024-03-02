/* eslint-disable react/style-prop-object */
import React from 'react'
import { useAuth } from '../context/AuthContext';

function Users() {
  const { user } = useAuth();

  return (
    <div className="d-flex flex-column justify-content-center h-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card">
              <h2 className="card-title text-center">User Profile</h2>
              <div className="card-body py-md-4">
                <div className="row justify-content-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    class="rounded-circle img-fluid" style={{ width: "150px" }} />
                </div>
                <hr/>
                <div class="row">
                  <div class="col-sm-6">
                    <p class="mb-0">User Name</p>
                  </div>
                  <div class="col-sm-6">
                    <p class="text-muted mb-0">{user?.username}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-6">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-6">
                    <p class="text-muted mb-0">{user?.email}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-6">
                    <p class="mb-0">Role</p>
                  </div>
                  <div class="col-sm-6">
                    <p class="text-muted mb-0">{user?.role}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-6">
                    <p class="mb-0">First Name</p>
                  </div>
                  <div class="col-sm-6">
                    <p class="text-muted mb-0">{user?.firstName}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-6">
                    <p class="mb-0">Last Name</p>
                  </div>
                  <div class="col-sm-6">
                    <p class="text-muted mb-0">{user?.lastName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            user?.role === "admin" && (
              <div className="col-lg-8">
                <div className="card">
                  <h2 className="card-title text-center">User Profile</h2>
                  <div className="card-body py-md-4">
                    <div className="row justify-content-center">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                        class="rounded-circle img-fluid" style={{ width: "150px" }} />
                    </div>
                    <hr/>
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="mb-0">User Name</p>
                      </div>
                      <div class="col-sm-6">
                        <p class="text-muted mb-0">{user?.username}</p>
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="mb-0">Email</p>
                      </div>
                      <div class="col-sm-6">
                        <p class="text-muted mb-0">{user?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="mb-0">Role</p>
                      </div>
                      <div class="col-sm-6">
                        <p class="text-muted mb-0">{user?.role}</p>
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="mb-0">First Name</p>
                      </div>
                      <div class="col-sm-6">
                        <p class="text-muted mb-0">{user?.firstName}</p>
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="mb-0">Last Name</p>
                      </div>
                      <div class="col-sm-6">
                        <p class="text-muted mb-0">{user?.lastName}</p>
                      </div>
                    </div>
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