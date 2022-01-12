import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useTranslation } from "react-i18next";

const users = ["SklepIdylla", "Galakpizza"];

export default function LoginPage() {
  const { t } = useTranslation();

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
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              {t("username")}
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
              onChange={handleChange}
            >
              {users.map(u => <option value={u}>{u}</option>)}
            </NativeSelect>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            localStorage.setItem('user', user);
            navigate('/home');
          }}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
}