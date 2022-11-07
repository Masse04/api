import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faComments } from "@fortawesome/free-regular-svg-icons";
const Comments = () => {
  const [donnees,setDonnees] = useState([]) ;
  const params = useParams() ;
  const location = useLocation() ;
  const postUrl = `https://jsonplaceholder.typicode.com/comments?postId=${params.postId}` ;
  axios.get(postUrl)
  .then(res => setDonnees(res.data))
  .catch(err => console.log(err))
  
  return (
    <div className="card border-primary mb-3">
      <Link to={`/posts/${location.state.userId}`}><button ><FontAwesomeIcon icon={faArrowAltCircleLeft} className = 'font'/></button></Link>
      <div className="card-header">{location.state.title}<FontAwesomeIcon icon={faComments}/></div>
      { 
      donnees.map(el => (
          <div className="card-body" key={el.id}>
              <h5 className="card-title">{el.name}</h5>
              <p className="card-text">{el.email}</p>
              <p className="card-text">{el.body}</p>
              <hr/>
          </div>
        ))}
    </div>
  )
}

export default Comments ;