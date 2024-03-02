import React from 'react'

function Profile({user}) {

    return user && (
        <div className="card">
            <h2 className="card-title text-center">User Profile</h2>
            <div className="card-body py-md-4">
                <div className="row justify-content-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                        className="rounded-circle img-fluid" style={{ width: "150px" }} />
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-6">
                        <p className="mb-0">User Name</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="text-muted mb-0">{user?.username}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-6">
                        <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="text-muted mb-0">{user?.email}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-6">
                        <p className="mb-0">Role</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="text-muted mb-0">{user?.role}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-6">
                        <p className="mb-0">First Name</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="text-muted mb-0">{user?.firstName}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-6">
                        <p className="mb-0">Last Name</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="text-muted mb-0">{user?.lastName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile