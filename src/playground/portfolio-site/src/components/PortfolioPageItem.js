import React from 'react';

const PortfolioPageItem = (props) => {
  console.log(props);
  return (
    <div>
      this is from my PortfolioPageItem {props.match.params.id}
    </div>
  )
};

export default PortfolioPageItem;
