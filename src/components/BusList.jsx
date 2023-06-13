import React from "react";

function BusList({ list }) {
  return (
    <div className="bus-list">
      <h2 className="bus-list-title">Bus List</h2>
      {list.length === 0 && <h4>List is empty</h4>}
      {list.map((item, index) => {
        return (
          <>
            <h4>Item {index + 1}</h4>
            <ul key={index}>
              <li>Bus number: {item.busNo}</li>
              <li>Route: {item.route}</li>
              <li>Driver: {item.driver}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
}

export default BusList;
