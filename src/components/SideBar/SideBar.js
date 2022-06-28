import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SideBar.css";
import { categoriesURL } from "../../Url/Url";

const SideBar = ({ filterValue, setFilterValue }) => {
     const [categoryData, setCategoryData] = useState([]);

     const handleChange = event => {
        if (filterValue !== event.target.value) {
          setFilterValue(event.target.value);
        } else {
          setFilterValue("");
        }
     }

     const clickHandler = event => {
          if (filterValue !== event.target.id) {
               setFilterValue(event.target.id);
          } else {
               setFilterValue("");
          }
     }

     useEffect(() => {
          const fetchData = async () => {
               const res = await axios.get(categoriesURL);
               setCategoryData(res.data);
          };
          fetchData().catch(console.error);
     }, []);

     return (
          <>
            <div className="sideBarSelect">
               <select
                name="categories"
                defaultValue={"Categories"}
                onChange={handleChange}
               >
                 <option value="Categories" disabled>
                    Categories
                 </option>
                 {
                    categoryData.map(item => (
                         <option key={item.id} value={item.id} id={item.id}>
                              {item.name}
                         </option>
                    ))
                 }
               </select>
            </div>
            <div className="sideBar-container">
               {
                    categoryData.map(item => (
                         <button
                           key={item.id}
                           name={item.name}
                           id={item.id}
                           className={filterValue === item.id ? 'active' : ''}
                           onClick={clickHandler}
                         >
                          {item.name}
                         </button>
                    ))
               }
            </div>
          </>
     )
}

export default SideBar;