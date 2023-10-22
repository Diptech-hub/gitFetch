import { Link } from 'react-router-dom';
import "./errorPage.css"

function ErrorPage() {
  return (
    <div className='error'>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to='/'>HomePage </Link>
    </div>
  );
}

export default ErrorPage;