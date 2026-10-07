import { useState } from "react";
import type { SubmitEvent } from "react";
import type { User } from "./UserList";

type FormUpdateProps = {
  user: User;
  onClose: () => void;
  handleUpdate: (user: User) => void;
};

const FormUpdate = ({ user, onClose, handleUpdate }: FormUpdateProps) => {
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        handleUpdate({ ...user, name, age });
        onClose();
    };

    return (
        <>
            <h1>Chỉnh sửa khách hàng</h1>
                <form onSubmit={handleSubmit}>
                        <div id="boxForm">
                            <label>Tên: 
                                <input 
                                    type="text" 
                                    value={name}
                                    required
                                    placeholder="Mời nhập tên"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label>Tuổi: 
                                <input 
                                    type="number" 
                                    min="1"
                                    value={age}
                                    required
                                    placeholder="Mời bạn nhập tuổi"
                                    onChange={(e) => setAge(Number(e.target.value))}
                                />
                            </label> 
                            <button type="submit" className="submit-btn">Lưu thay đổi</button>
                            
                            <button type="button" className="cancel-btn" onClick={onClose}>
                                Hủy
                            </button>
                        </div>
                    </form>
        </>
    )

};

export default FormUpdate;