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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //? Adding the form data to the list of data
    setList([...list, formData]);
  };
  return (
    <>
      <form className="bus-form-container" onSubmit={handleSubmit}>
        <legend>Bus Form</legend>
        <label htmlFor="bus-no">
          Bus number :
          <input
            type="number"
            id="bus-no"
            placeholder="Bus no"
            name="busNo"
            value={formData.busNo}
            min="1"
            max="12"
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="route">
          Route :
          <select
            name="route"
            id="route"
            onChange={handleInputChange}
            defaultValue="default"
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
        </label>

        <label htmlFor="driver-name">
          Driver's name :
          <input
            type="text"
            name="driver"
            id="driver-name"
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Submit</button>
        {console.table("List", list)}
      </form>

      <BusList list={list} />
    </>
  );
}

export default BusForm;
