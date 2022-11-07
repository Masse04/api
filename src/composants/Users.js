import axios from 'axios' ;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import demonSlayer from '../demon slayer.jpg'
const Users = () => {
    const [donnees,setDonnees] = useState([]);
    const userUrl = 'https://jsonplaceholder.typicode.com/users' ;
        axios.get(userUrl)
        .then(res => setDonnees(res.data))
        .catch(err => console.log(err))
    
    
  return (
    <div className='Users'> {donnees.map(el => (
        <div key={el.id} className = 'User'>
            <Link to={`/posts/${el.id}`} state = {el.username} style = {{textDecoration : 'none', color : 'black'}}>
              <div className="card border-primary" style={{width: '18rem'}}>
                <img src= {demonSlayer} className="card-img-top" alt="..." style={{height : '10rem'}}/>
                <div className="card-body">
                  <h5 className="card-title">{el.name}</h5>
                  <p className="card-text">{el.username}</p>
                  <p className="card-text">{el.email}</p>
                </div>
              </div>
            </Link>
        </div>
      ))}
    </div>
  )
}

export default Users ;