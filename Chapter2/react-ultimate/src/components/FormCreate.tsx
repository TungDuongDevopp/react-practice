import { useState } from 'react';
import type { SubmitEvent } from 'react'; 
import DisplayInfo from './DisplayInfo';
import type { User } from './UserList';
type FormCreateProps = {
  onClose : () => void
  handleCreate : (user: Omit<User, 'id'>) => void
}
const FormCreate = ({onClose,handleCreate}: FormCreateProps) =>{

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [ageInput, setAgeInput] = useState(0);
    const [nameInput, setNameInput] = useState('');
    
    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();    
        setName(nameInput);
        setAge(ageInput);
        setAgeInput(0);
        setNameInput(''); 
         const newUser = {
            name: nameInput,
            age: Number(ageInput)
        }

    handleCreate(newUser)
    onClose()
    
};
    return( 
        <>
            <h1>Form thêm mới</h1>
            <form onSubmit={handleSubmit}>
                <div id="boxForm">
                    <label>Tên: 
                        <input 
                            type="text" 
                            value={nameInput} 
                            placeholder='Mời nhập tên' 
                            onChange={(e) => setNameInput(e.target.value)}
                        />
                    </label>
                    <label>Tuổi: 
                        <input 
                            type="number" 
                            min='1' 
                            value={ageInput} 
                            placeholder='Mời bạn nhập tuổi' 
                            onChange={(e) => setAgeInput(Number(e.target.value))} 
                        />
                    </label> 
                    <button type="submit" className="submit-btn">Submit</button>
                    
                    <button type="button" className="cancel-btn" onClick={onClose}>
                        Hủy
                    </button>
                </div>
            </form>
            {name && <DisplayInfo name = {name} age = {age}/>}
        </>
    )

}

export default FormCreate;