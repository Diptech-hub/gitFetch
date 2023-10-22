import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from "react-feather"
import "./errorPage.css"

function ErrorPage() {
  return (
    <div className='error'>
    <AlertTriangle color='red' size={60}/>
      <h1>404 - Page Not Found</h1>
      <p>Oops!!! The page you are looking for does not exist.</p>
      <Link to='/'><button><ArrowLeft size={15}/>Home Page</button> </Link>
    </div>
  );
}

export default ErrorPage;