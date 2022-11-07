import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Posts = () => {
    const [donnees,setDonnees] = useState([]) ;
    const params = useParams();
    const location = useLocation() ;
    const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${params.userId}` ;
    axios.get(postUrl)
    .then(res => setDonnees(res.data))
    .catch(err => console.log(err))
  return (
    <div className="Posts">
      {donnees.map(el => (
        <div className="card border-primary mb-3" key={el.id}>
          <Link to = {`/comments/${el.id}`} state = {el} style = {{textDecoration : 'none', color : 'black'}}>
            <div className="card-header">{location.state}<FontAwesomeIcon icon={faMessage}/></div>
            <div className="card-body">
              <h6 className = 'card-title'>{el.title}</h6>
              <p className="card-text">{el.body}</p>
            </div>
          </Link>
        </div>
      ))
      }</div>  )
}

export default Posts ;