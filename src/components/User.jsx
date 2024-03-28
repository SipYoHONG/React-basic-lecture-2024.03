import { useState } from 'react';
import '../apps/App.css';

export default function User() { 
    const initUsers = [
        {id:1, name:'admin', email:'admin@human.com'}, 
        {id:2, name:'James', email:'james@gmail.com'}
    ]
    const [users,setUsers] = useState(initUsers);
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
            <button onClick={() => {
                const id = prompt('ID를 입력하세요.');
                const name = prompt('닉네임을 입력하세요.');
                const email = prompt('이메일을 입력하세요.');
                setUsers([...users, {id, name, email}]);
            }}>추가</button>
            <button onClick={() => {
                const id = prompt('ID를 입력하세요')
                setUsers(users.filter(user => user.id != id));
                // let newUsers = users.filter(user => user.id != id);
                // let newUsers = [];
                // for (let user of users)
                //  if (user.id != id)
                //    newUsers.push(user);
            }}>삭제</button>
    </div>
    );
}
  