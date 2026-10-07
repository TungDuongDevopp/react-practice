import FormCreate from "./FormCreate"
import { useEffect, useState } from "react"
import FormUpdate from "./FormUpdate"

 export type User = {
  id: number
  name: string
  age: number
}

const users: User[] = [
  { id: 1, name: "Tùng", age: 15 },
  { id: 2, name: "Nam", age: 55 },
  { id: 3, name: "Huy", age: 10 },
  { id:4, name:"Duong",age:22}
]

const UserList  = () => {
        const [isOpenFormCreate, setIsOpenFormCreate] = useState(false);
        const [isOpenFormUpdate, setIsOpenFormUpdate] = useState(false);
        const [userList,setUserList] = useState(users);
        const [selectedUser, setSelectedUser] = useState<User | null>(null)
    
        const handleCreate = (user: Omit<User, "id">) => {
            setUserList(prev => {
                const nextId = prev.reduce((maxId, current) => Math.max(maxId, current.id), 0) + 1;
                return [...prev, { ...user, id: nextId }];
            });
        }
        const handleEdit = (user:User) => {
           setSelectedUser(user)
            setIsOpenFormUpdate(true)
            }

        const handleUpdate = (updatedUser: User) => {
            setUserList(prev => prev.map(user => (
                user.id === updatedUser.id ? updatedUser : user
            )));
        }

        const closeUpdateForm = () => {
            setIsOpenFormUpdate(false);
            setSelectedUser(null);
        }
        const handleDelete = (deletedUser: User) =>{
            const newUserList =  userList.filter(item => item.id !== deletedUser.id)
            setUserList(newUserList)
        }
        useEffect(()=>{
           if(userList.length === 0){
            alert("Hết r xóa gì nữa")
           }
            console.log("Use Effect")
        },[userList]
    );

        return (
            <>
            <h1>Danh sách khách hàng</h1>

            {!isOpenFormCreate && ( <button className="create-btn" onClick={() => setIsOpenFormCreate(true)}>Thêm mới</button>)}
            
            <table border={1} style={{ maxWidth: "500px" }}>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {userList.map((user) => (
                    <tr key={user.id} className={user.age>18 ? "green" : "red"}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>
                            <div className="btn-group">
                                <button className="edit-btn" onClick={() => handleEdit(user)}> Sửa</button>
                                <button className ="delete-btn" onClick = {()=>handleDelete(user)} >Xóa</button>
                            </div>
                            
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            {isOpenFormCreate && (
                <FormCreate
                    onClose={() => setIsOpenFormCreate(false)}
                    handleCreate={handleCreate}
                />
            )}
            {isOpenFormUpdate && selectedUser && (
                <FormUpdate
                    key={selectedUser.id}
                    user={selectedUser}
                    onClose={closeUpdateForm}
                    handleUpdate={handleUpdate}
                />
            )}


        </>
            
        )  
    
}

export default UserList;