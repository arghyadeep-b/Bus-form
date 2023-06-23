/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaEdit, FaTrash, FaPhone } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import "./BusList.css";
import "./Buslist.css";

function BusList2({ list, removeItem, editItem }) {
  return (
    <div className="bus-list">
      <h2 className="bus-list-title">Bus List</h2>
      {list.length === 0 && <h4>List is empty</h4>}
      {list.map((item, index) => {
        return (
          <div key={index} className="ticket airline">
            <div className="top">
              <p4>Bus No. {item.busNo}</p4>
              <div className="busicon">
                <FaBus size={25} />
              </div>
              <div className="big">
                <p className="from">
                  {item.route}
                  {/* BWI
                  <i class="fas fa-arrow-right"></i> SAN */}
                </p>
              </div>

              <div className="top--side">
                <i className="Fabus"></i>
              </div>
            </div>
            <div className="bottom">
              <div className="row-1">
                <p3 className="col-1">
                  <span>Drivers name: {item.driver}</span>
                </p3>

                <p3 className="col-1">
                  <FaPhone size={9} /> 959555235
                </p3>
              </div>
             <div className="seperate"></div>
              <div className="column">
                <div className="row-2">
                  <p3>
                    <span className="col-2">Boards</span>
                  </p3>
                  <p3>
                    <span className="col-2">Departs</span>
                  </p3>
                  <p3>
                    <span className="col-2">Arrives</span>
                  </p3>
                </div>
                <div className="row-2">
                  <p3>
                    <span className="col-2">11:00</span>
                  </p3>
                  <p3>
                    <span className="col-2">12:00</span>
                  </p3>
                  <p3>
                    <span className="col-2">13:00</span>
                  </p3>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BusList2;
