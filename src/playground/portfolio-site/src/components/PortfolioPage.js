import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = (props) => {
  console.log(props);
  return (
    <div>
      this is from my PortfolioPage
    <h3>my work</h3>
      <Link to="/portfolio/11">One item</Link>
      <Link to="/portfolio/22">Second item </Link>
    </div>
  );
}

export default PortfolioPage;
