import { useState } from 'react';
import '../apps/App.css';

export default function User() { 
    const initUsers = [
        {id:1, name:'admin', email:'admin@human.com'}, 
        {id:2, name:'James', email:'james@gmail.com'}
    ]
    const [users,setUsers] = useState(initUsers);
    const [form,setForm] = useState({id:'', name:'', email:''});
    const handleSubmit = (event) => {
    event.preventDefault();    
        const existUser = users.find(user => user.id == form.id);
        const newUsers = [];
            if (existUser) {
                for (let user of users)
                    if(user.id == form.id)
                        newUsers.push(form);
                    else   
                        newUsers.push(user);
                        setUsers(newUsers);
                    } else
                        setUsers([...users, form]);
                    }
        const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value}); 
    }
    return (
    <div className="card">      
            <h1>사용자 목록</h1>  
            <table border={1}>
                <tr><th>ID</th><th>NAME</th><th>E-MAIL</th></tr>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                }
            </table>
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor='id'>ID:</label>
                <input type='text' id='id' name='id' value={form.id} 
                    onChange={handleChange}
                /><br />
                <label htmlFor='name'>이름:</label>
                <input type='text' id='name' name='name' value={form.name} 
                    onChange={handleChange}
                /><br />
                <label htmlFor='email'>이메일:</label>
                <input type='text' id='email' name='email' value={form.email} 
                    onChange={handleChange}
                /><br />
                <button>추가/수정</button>
            </form>
            <button onClick={() => {
                const id = prompt('ID를 입력하세요')
                setUsers(users.filter(user => user.id != id));
            }}>삭제</button>
    </div>
    );
}
  