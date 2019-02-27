import React, { Component } from 'react';
import './404.scss';
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
        <div class="error_section">
            <p class="error_section_subtitle">Opps We Lost Your Page !</p>
            <h1 class="error_title">404</h1>
            <Link to="/" class="btn-404">Back to home</Link>
        </div>
    );
  }
}

export default NotFound;
