import React from "react";
import "./Form.css";

function Form() {
  const [buttons, setButtons] = React.useState({ submit: 0 });
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");

  async function sendData() {
    const res = await fetch("http://localhost:9000/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        submit: buttons.submit,
        email: email,
        number: number,
        test: "this is test message",
      }),
    });
    res.json().then((info) => {
      console.log(info);
    });
  }

  // React.useEffect(() => {
  //   sendData();
  // }, []);

  async function handleSubmit(event) {
    const clicks = buttons.submit + 1;
    setButtons({ submit: clicks });
    sendData();
    event.preventDefault();
  }

  function handleChange(event) {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else {
      setNumber(event.target.value);
    }
  }

  return (
    <div className="form-container">
      <form>
        <div className="row">
          <div className="col-25">
            <label for="fname">Email</label>
          </div>
          <div className="col-75">
            <input
              type="email"
              id="fname"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="fname">Phone Number</label>
          </div>
          <div className="col-75">
            <input
              type="number"
              id="fname"
              name="firstname"
              value={number}
              placeholder="+91.."
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </div>
        </div>
        <input
          type="submit"
          className="submit"
          onClick={(event) => handleSubmit(event)}
        />
      </form>
    </div>
  );
}

export default Form;
