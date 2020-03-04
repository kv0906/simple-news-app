import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  makeStyles,
  TextField,
  Grid,
  Button,
  Typography
} from "@material-ui/core";
import Layout from "../../components/Layout";
const preference = ["bitcoin", "animal", "apple", "earth"];
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0)
  },
  error: {
    color: "red",
    display: "block",
    padding: theme.spacing(2, 0)
  },
  formControl: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(1),
    minWidth: 120
  }
}));
function Profile() {
  const classes = useStyles();
  const { register, handleSubmit, errors, setValue } = useForm();
  const onSubmit = data => {
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    alert("Successfully registered!");
  };
  useEffect(() => {
    if (localStorage && localStorage.getItem("user") !== null) {
      const user = JSON.parse(localStorage.getItem("user"));
      setValue("username", user.username);
      setValue("preference", user.preference);
    }
  }, [setValue]);
  return (
    <Layout heading="Profile">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Grid container direction="column" alignItems="flex-start" spacing={3}>
          <Grid item xs>
            <TextField
              name="username"
              inputRef={register({ required: true })}
              variant="outlined"
              id="standard-basic"
              label="Username"
            />
            {errors.username && (
              <span className={classes.error}>This field is required</span>
            )}
          </Grid>
          <Grid item xs>
            {/* <TextField
              name="preference"
              inputRef={register}
              variant="outlined"
              id="standard-basic"
              label="Preference"
            /> */}
            <Typography paragraph variant="body1">
              Preference
            </Typography>
            <select ref={register} name="preference">
              {preference.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item.toUpperCase()}
                  </option>
                );
              })}
            </select>
          </Grid>

          <Grid item xs>
            <Button color="primary" type="submit" variant="outlined">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
}

export default Profile;
