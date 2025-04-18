import React, { useEffect, useState } from "react";
import "./user.css";
import { FaPlus } from "react-icons/fa";
import { LucideDelete, LucideEdit, LucideEye } from "lucide-react";
import axios from "axios";

const Users = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        department: "",
        bio: "",
    });
    const [users, setUsers] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);

    // fetch all users
    const fetchUsers = async () => {
        try {
            const response = await axios.get(``);
            // setUsers(response.data);
            setUsers([
                {
                    id: "e0c8c846-d86f-4ec3-8efb-cc15e37aa22e",
                    name: "Guleid Abdilatif",
                    username: "guleid_a",
                    email: "guleid@example.com",
                    department: "Engineering",
                    bio: "Passionate full-stack developer and tech enthusiast.",
                },
                {
                    id: "1795c4fd-2a17-4d7f-a1a4-275f520fb4fc",
                    name: "Amina Yusuf",
                    username: "amina_y",
                    email: "amina@example.com",
                    department: "Marketing",
                    bio: "Creative strategist with a love for branding and storytelling.",
                },
                {
                    id: "b7f1d86d-e0e7-4a92-b4f4-4c41658cfb55",
                    name: "Hassan Noor",
                    username: "hass_n",
                    email: "hassan@example.com",
                    department: "Finance",
                    bio: "Numbers guy. Excel wizard. Crypto curious.",
                },
                {
                    id: "bb180295-51bb-498d-b103-9e0d5b37a91d",
                    name: "Layla Mohamed",
                    username: "layla_m",
                    email: "layla@example.com",
                    department: "Human Resources",
                    bio: "People-first HR leader who believes in team culture.",
                },
                {
                    id: "acb53e0d-66c4-4a2a-b158-5aa031e4305d",
                    name: "Abdi Ahmed",
                    username: "abdi_ah",
                    email: "abdi@example.com",
                    department: "Product",
                    bio: "Building products that solve real problems.",
                },
            ]);
        } catch (error) {
            console.log(error);
        }
    };

    // fetch specific user from server
    const fetchUser = async (id) => {
        try {
            const response = await axios.get(`.../${id}`);
            // setUser(response.data)
            setUser({
                id: "e0c8c846-d86f-4ec3-8efb-cc15e37aa22e",
                name: "Guleid Abdilatif",
                username: "guleid_a",
                email: "guleid@example.com",
                department: "Engineering",
                bio: "Passionate full-stack developer and tech enthusiast.",
            });
            setIsEditMode(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // post user to server
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // await axios.post("", user);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="p-5">
            <button className="btn btn-success float-end d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FaPlus />
                Add
            </button>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NAME</th>
                        <th scope="col">USERNAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">DEPARTMENT</th>
                        <th scope="col">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.department}</td>
                            <td
                                style={{
                                    fontSize: "30px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                }}>
                                <LucideEye style={{ color: "green", cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#viewUser" />
                                <LucideEdit style={{ color: "black", cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => fetchUser(user.id)} />
                                <LucideDelete style={{ color: "red", cursor: "pointer" }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* add form modal  */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: "60%" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>{isEditMode ? "Edit user" : "New User"}</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        Name:
                                    </label>
                                    <input type="text" name="name" className="form-control" value={user.name} placeholder="Guleid Abdilatif" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        Username:
                                    </label>
                                    <input type="text" name="username" className="form-control" value={user.username} placeholder="guledabdilatif" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        Email:
                                    </label>
                                    <input type="text" name="email" className="form-control" value={user.email} placeholder="name@example.com" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        Department:
                                    </label>
                                    <input type="text" className="form-control" name="department" value={user.department} placeholder="ICM, DC" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">
                                        Bio:
                                    </label>
                                    <textarea className="form-control" name="bio" type="text" rows="3" value={user.bio} placeholder="write your bio here..." onChange={handleChange}></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-success" data-bs-dismiss="modal">
                                        {isEditMode ? "Update" : "Save changes"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* view user form  */}
            <div className="modal fade" id="viewUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: "60%" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3 d-flex gap-2 " style={{ fontSize: "18px", borderBottom: "1px solid rgba(0,0,0,0.2) " }}>
                                <p className="">Name:</p>
                                <p style={{ fontStyle: "italic" }}>Guleid Abdilatif</p>
                            </div>
                            <div className="mb-3 d-flex gap-2 " style={{ fontSize: "18px", borderBottom: "1px solid rgba(0,0,0,0.2) " }}>
                                <p className="">User Name:</p>
                                <p style={{ fontStyle: "italic" }}>guledabdilatif</p>
                            </div>
                            <div className="mb-3 d-flex gap-2 " style={{ fontSize: "18px", borderBottom: "1px solid rgba(0,0,0,0.2) " }}>
                                <p className="">Email:</p>
                                <p style={{ fontStyle: "italic" }}>example@example.com</p>
                            </div>
                            <div className="mb-3 d-flex gap-2 " style={{ fontSize: "18px", borderBottom: "1px solid rgba(0,0,0,0.2) " }}>
                                <p className="">Department:</p>
                                <p style={{ fontStyle: "italic" }}>Dc</p>
                            </div>
                            <div className="mb-3 d-flex align-items-start gap-2  " style={{ fontSize: "18px" }}>
                                <p className="">Bio:</p>
                                <p style={{ fontStyle: "italic" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia ratione laudantium accusantium similique ea laboriosam architecto natus ipsam. Nesciunt quia fugit cumque minus non quis debitis possimus culpa sint.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
