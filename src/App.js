import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import Result from "./components/Result";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

function App() {
  var [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    // monthlyPayment: 0,
  });

  return (
    <div className="App">
      <Navbar />
      <div style={{ marginLeft: "4%", marginTop: "2%" }}>
        <Grid container spacing={5} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
