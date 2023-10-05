import React from "react";

function MyMaterialUIForm() {
  return (
    <form>
        {/* Text field for entering a username */}

      <TextField label="Username" variant="outlined" fullWidth />
      {/* Text field for entering a password (with input type set to password) */}
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
      />
      {/* Button for submitting the form */}
      <Button variant="contained" color="primary" type="submit">
        Sign Up
      </Button>
    </form>
  );
}

export default MyMaterialUIForm;
