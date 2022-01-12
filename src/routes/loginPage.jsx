import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";

const users = ["SklepIdylla", "Galakpizza"];

export default function LoginPage() {
  const [user, setUser] = React.useState(users[0]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser(event.target.value);
  };

    return (
    <Grid
      spacing={1}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}>
    
      <Grid item xs={3}>
        <TextField
          select
          label="Nick"
          value={user}
          onChange={handleChange}
        >
          {users.map((user) => (
            <MenuItem key={user} value={user}>
              {user}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={()=> {
            localStorage.setItem('user', user);
            navigate('/home');
          }}>
          Log in
        </Button>
      </Grid>
    </Grid> 
    );
  }