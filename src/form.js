import { useState } from "react";
export function Form() {


    const [firstname, setfirstName] = useState("");
    const [middlename, setmiddleName] = useState("");
    const [lastname, setlastName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const Title = ({ type, data }) => <h5>{type} is: {data}</h5>
    // const Pass = ({ data }) => <h5>Hello {data}</h5>
    



    return (
        <div>

            <FormatName firstname={firstname}  middlename={middlename} lastname={lastname} />
            <Title type={"email"} data={email} />
            <Title type="password" data={password} />
            <form onSubmit={async (event) => {
                event.preventDefault();
                console.log(event.target.elements.email.value);
                console.log(event.target.password.value);

                setfirstName(event.target.elements.firstname.value);
                setmiddleName(event.target.elements.middlename.value);
                setlastName(event.target.elements.lastname.value);

                setEmail(event.target.elements.email.value);
                setPassword(event.target.elements.password.value);

                //ajax call using fetch function..
                // let resp = await fetch('http://localhost:3000/users', { method: "post", body: JSON.stringify({ email: event.target.elements.email.value, password: event.target.password.value }) })
                // let data = await resp.json();
                // console.log(data);
            }}>
                <label >First Name</label>
                <input type="text" name="firstname" placeholder="Enter first name" required />
                <label >Middle name</label>
                <input type="text" name="middlename" placeholder="Enter middle name" />
                <label >Last Name</label>
                <input type="text" name="lastname" placeholder="Enter last name" required /> <br />


                <label >E-mail id</label> <br />
                <input type="text" name="email" placeholder="Enter e-mail id" required /> <br />
                <label >Password</label><br />
                <input type="password" name="password" placeholder="Enter Password" /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


const FormatName = ({ firstname, middlename, lastname }) =>
    <h2>Hello,{firstname} {middlename} {lastname}</h2>;

