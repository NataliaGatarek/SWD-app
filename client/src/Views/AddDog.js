import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import "./views.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function AddDog() {
  const classes = useStyles();
  const [imageSeletectd, setImageSelected] = useState("");
  const [url, setUrl] = useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", imageSeletectd);
    data.append("upload_preset", "h85uvoz4");
    data.append("cloud_name", "dtcs8hj99");
    fetch("	https://api.cloudinary.com/v1_1/dtcs8hj99/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [formDogData, setFormDogData] = useState({
    name: "",
    kennel: "",
    live: "",
    description: "",
    titles: "",
    birth: "",
    mname: "",
    fname: "",
    breeder: "",
    breedingdog: "",
    health: "",
    additional: "",
    image: "",
    contact: "",
  });
  const {
    name,
    kennel,
    live,
    description,
    titles,
    birth,
    mname,
    fname,
    breeder,
    breedingdog,
    health,
    additional,
    image,
    contact,
  } = formDogData;
  const onChange = (e) =>
    setFormDogData({ ...formDogData, [e.target.name]: e.target.value });

  async function fetchData() {
    fetch("http://localhost:5000/dogs/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        kennel,
        live,
        description,
        titles,
        birth,
        mname,
        fname,
        breeder,
        breedingdog,
        health,
        additional,
        image: url,
        contact,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("success");
    fetchData();
  };
  return (
    <div>
      <h1 className="header-style">
        {" "}
        Please fill out the form to add your dog{" "}
      </h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        className="flex-form"
        onSubmit={handleOnSubmit}
      >
        <TextField
          autoComplete="name"
          name="name"
          variant="outlined"
          required
          fullWidth
          id="name"
          label="Name of the Dog"
          autoFocus
          value={name}
          onChange={onChange}
        />
        <TextField
          id="standard-basic"
          label="Breeding kennel"
          autoComplete="kennel"
          name="kennel"
          variant="outlined"
          required
          fullWidth
          id="kennel"
          autoFocus
          value={kennel}
          onChange={onChange}
        />
        <TextField
          id="standard-basic"
          label="Where does the dog live"
          autoComplete="live"
          name="live"
          variant="outlined"
          required
          fullWidth
          id="live"
          autoFocus
          value={live}
          onChange={onChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Information about the dog"
          multiline
          rows={4}
          defaultValue="Description of the dog"
          variant="outlined"
          name="description"
          id="description"
          autoFocus
          value={description}
          onChange={onChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Titles of the dog"
          multiline
          rows={4}
          defaultValue="Titles of the dog"
          variant="outlined"
          name="titles"
          id="titles"
          autoFocus
          value={titles}
          onChange={onChange}
        />
        <TextField
          id="standard-basic"
          label="Date of birth"
          autoComplete="birth"
          name="birth"
          variant="outlined"
          required
          fullWidth
          id="birth"
          autoFocus
          value={birth}
          onChange={onChange}
        />
        <TextField
          id="standard-basic"
          label="Full name of the mother"
          autoComplete="mname"
          name="mname"
          variant="outlined"
          required
          fullWidth
          id="mname"
          autoFocus
          value={mname}
          onChange={onChange}
        />
        <TextField
          id="standard-basic"
          label="Full name of the father"
          autoComplete="fname"
          name="fname"
          variant="outlined"
          required
          fullWidth
          id="fname"
          autoFocus
          value={fname}
          onChange={onChange}
        />
        <p>Are you a breeder?</p>
        <RadioGroup
          aria-label="breeding"
          name="breeding"
          value={breeder}
          onChange={onChange}
          id="breeder"
          name="breeder"
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <p>Is your dog a breeding dog?</p>
        <RadioGroup
          aria-label="breedingdog"
          name="breedingdog"
          value={breedingdog}
          onChange={onChange}
          id="breedingdog"
          name="breedingdog"
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <TextField
          inputProps={{ style: { alignItems: "center" } }}
          id="outlined-multiline-static"
          label="Information about the heatlh of the dog"
          multiline
          rows={4}
          defaultValue="Heatlh information"
          variant="outlined"
          name="health"
          id="health"
          autoFocus
          value={health}
          onChange={onChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="additional information, e.g. whether the dog was bred"
          multiline
          rows={4}
          defaultValue="More iformation"
          variant="outlined"
          name="additional"
          id="additional"
          autoFocus
          value={additional}
          onChange={onChange}
        />
        <label htmlFor="img">
          Upload a picture of your dog
          <input
            name="img"
            type="file"
            accept="image/*"
            value={image}
            onChange={(event) => setImageSelected(event.target.files[0])}
            required
          />
        </label>
        <TextField
          id="standard-basic"
          label="Your contact information"
          autoComplete="contact"
          name="contact"
          variant="outlined"
          required
          fullWidth
          id="contact"
          autoFocus
          value={contact}
          onChange={onChange}
        />
        <Button variant="contained" type="submit" onClick={() => uploadImage()}>
          Add your dog
        </Button>
      </form>
    </div>
  );
}
export default AddDog;
