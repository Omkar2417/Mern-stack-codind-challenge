import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  CssBaseline,
} from "@mui/material";
import SearchForm from "./components/SearchForm";
import Transactions from "./components/Transactions";
import Statistics from "./components/Statistics";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import CombinedData from "./components/CombinedData";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [month, setMonth] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = (searchText, month) => {
    setSearchText(searchText);
    setMonth(month);
    setPage(1); 
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(145deg, rgba(2,36,67,1) 0%, rgba(48,71,94,1) 50%, rgba(112,122,146,1) 100%)", 
          padding: "20px", 
        }}
      >
        
        <AppBar
          position="sticky"
          sx={{
            mb: 4,
            bgcolor: "rgba(0, 1, 255, 0.5)", 
            boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
            height: 80,
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <Toolbar>
            <Typography
              variant="h4"
              sx={{
                flexGrow: 1,
                color: "#fff",
                fontWeight: "bold",
                letterSpacing: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Product Transactions Dashboard
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SearchForm onSearch={handleSearch} />
            </Box>
          </Toolbar>
        </AppBar>

        <Container>
          {month ? (
            <>
              
              <Paper
                elevation={4}
                sx={{
                  padding: 3,
                  borderRadius: "20px",
                  mb: 4,
                  bgcolor: "#fff5f7",
                  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <Transactions
                  searchText={searchText}
                  month={month}
                  page={page}
                  setPage={setPage}
                />
              </Paper>

              
              <Grid container spacing={4} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                  <Grid container direction="column" spacing={3}>
                    <Grid item>
                      <Statistics month={month} />
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={4}
                        sx={{
                          padding: 3,
                          borderRadius: "16px",
                          height: "calc(100% - 150px - 16px)",
                          bgcolor: "#e1ffe1",
                          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
                          },
                        }}
                      >
                        <BarChart month={month} />
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={4}
                    sx={{
                      padding: 3,
                      borderRadius: "16px",
                      height: "500px",
                      bgcolor: "#f2f4ff",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <PieChart month={month} />
                  </Paper>
                </Grid>
              </Grid>

           
              <Paper
                elevation={4}
                sx={{
                  padding: 3,
                  borderRadius: "20px",
                  mb: 4,
                  bgcolor: "#fffaf0",
                  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <CombinedData month={month} />
              </Paper>
            </>
          ) : (
            <Paper
              elevation={4}
              sx={{
                padding: 3,
                borderRadius: "20px",
                mb: 4,
                bgcolor: "#fff5f7",
                boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <Transactions
                searchText={searchText}
                month={month}
                page={page}
                setPage={setPage}
              />
            </Paper>
          )}
        </Container>
      </Box>
    </>
  );
};

export default App;
