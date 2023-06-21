import React, { useState } from "react";
import "./BusForm.css";
import BusList from "./BusList";

function BusForm() {
  const [formData, setFormData] = useState({
    busNo: "",
    route: "",
    driver: "",
  });
  const [list, setList] = useState([]);
  const [routes, SetRoutes] = useState([
    {
      routeNo: 1,
      routeName: "Place A - Place B",
    },
    {
      routeNo: 2,
      routeName: "Place C - Place D",
    },
    {
      routeNo: 3,
      routeName: "Place E - Place F",
    },
    {
      routeNo: 4,
      routeName: "Place G - Place H",
    },
    {
      routeNo: 5,
      routeName: "Place I - Place J",
    },
    {
      routeNo: 6,
      routeName: "Place K - Place L",
    },
  ]);

  //! This is not working
  const [addingRoute, setAddingRoute] = useState(false);
  const addRoute = () => {
    setAddingRoute(!addingRoute);
  };
  //!

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.busNo === "" || formData.route == "" || formData.driver === "")
      return;
    //? Adding the form data to the list of data
    const uniqueList = list.filter((item) => {
      // Checking if the the bus no or the driver is already in the list
      return item.busNo != formData.busNo && item.driver != formData.driver;
    });
    setList([...uniqueList, formData]);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.busNo !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.busNo === id);
    removeItem(id);
    setFormData(specificItem);
  };
  return (
    <div className="container">
      <h1 className="bus-form-title">Bus Form</h1>
      <form className="bus-form-container" onSubmit={handleSubmit}>
        <div className="bus-no-container input-containers">
          <label htmlFor="bus-no">Bus number :</label>
          <input
            type="number"
            id="bus-no"
            placeholder="Enter Bus no"
            name="busNo"
            value={formData.busNo}
            min="1"
            max="12"
            className="bus-form-inputs bus-no"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="route-container input-containers">
          <label htmlFor="route">Route :</label>
          <select
            name="route"
            id="route"
            className="bus-form-inputs route"
            onChange={handleInputChange}
            defaultValue="default"
            required
          >
            <option value="default" disabled>
              --Select Route--
            </option>
            {routes.map((route, index) => {
              return (
                <option value={route.routeName} key={index}>
                  {route.routeName}
                </option>
              );
            })}
            <option value="add" onClick={addRoute}>
              Add Route
            </option>
          </select>
          {/* !!! This is not working---------- */}
          {addingRoute && (
            <select name="extraRoutes" id="Extraroutes" defaultValue="default">
              <option value="default">Extra routes</option>
              <option value="extra-1">Extra Place M - Place N</option>
              <option value="extra-2">Extra Place O - Place P</option>
              <option value="extra-3">Extra Place Q - Place R</option>
              <option value="extra-4">Extra Place S - Place T</option>
            </select>
          )}
        </div>

        <div className="driver-container input-containers">
          <label htmlFor="driver-name">Driver's name :</label>
          <input
            type="text"
            name="driver"
            id="driver-name"
            placeholder="Enter a name"
            className="bus-form-inputs driver-name"
            onChange={handleInputChange}
            required
          />
        </div>
      </form>
      <button type="submit" className="btn-submit" onClick={handleSubmit}>
        Add Bus
      </button>
      {console.table("List", list)}

      <BusList list={list} removeItem={removeItem} editItem={editItem} />
    </div>
  );
}

export default BusForm;
