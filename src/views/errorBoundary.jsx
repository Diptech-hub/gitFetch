import  { Component } from 'react';
import { Outlet } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or send it to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return <Outlet />;
  }
}

export default ErrorBoundary;