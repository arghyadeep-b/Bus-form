/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./BusList.css";

function BusList({ list, removeItem, editItem }) {
  return (
    <div className="bus-list">
      <h2 className="bus-list-title">Bus List</h2>
      {list.length === 0 && <h4>List is empty</h4>}
      {list.map((item, index) => {
        return (
          <>
            <div key={index} className="bus-list-item ticket">
              <div className="ticket-bus-no">
                <p>Bus No. {item.busNo}</p>
                <div className="style-zigzag"></div>
              </div>
              <div>
                <li>Route: {item.route}</li>
                <li>Driver: {item.driver}</li>
              </div>
              <button
                type="button"
                className="btn-edit-ticket"
                onClick={() => editItem(item.busNo)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="btn-delete-ticket"
                onClick={() => removeItem(item.busNo)}
              >
                <FaTrash />
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default BusList;
