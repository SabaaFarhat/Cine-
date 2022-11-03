import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import TodoComponent from "./TodoComponent";
import { setTodos } from "../../features/actions/todo.actions";
import TextField from "@mui/material/TextField";
import { SubmitButton } from "../common/common";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ResponsiveAppBar from "../NavBar";
import "./todo.css";

const index= () => {

  const [coutMetrages, setCoutMetrages] = useState("");

  const fetchCourtMetrages =async () => {
    const result = await axios.get("http://localhost:8005/SpringMVC/cinema/court-metrage").catch((err) => { console.log("Err", err);
  });
      console.log("🚀 ~ file: index.jsx ~ line 27 ~ fetchCourtMetrages ~ result", result)
      setCoutMetrages(result.data);
  };

  useEffect(() => {
    fetchCourtMetrages();
  });

  console.log("Cout Metrages :", coutMetrages);

  return (
      <div>
      <ResponsiveAppBar></ResponsiveAppBar>
          <div className="mb-5">
            <SubmitButton type="submit" style={{float:"right",marginTop:"8px"}} onClick={handleSubmit}>New task</SubmitButton>
          <TextField id="standard-basic" label="Search" variant="standard" style={{ width: "1330px",marginTop:"10px",marginLeft:"8px" }} className="ml-5" name="searchedName" onChange={handleChange} />
          <div style={{ maxHeight: "500px", overflowY: "auto", overflowX: "hidden" }} className="global-scroll">
              <Grid container className="tasks-list-container ml-5" columns={{ xs: 8, md: 8, lg: 12 }}>
                  <TodoComponent  tasks={searchHandel()} className="ml-5"/>
              </Grid>
          </div>
      </div>
      </div>
  );
};

export default index;