import React from 'react'

export default function Testing() {

     const person = [
        {empid : 1, firstName : "Gopinath", lastName : "Paidakal", age : 45, eyeColor: "Blue"},
        {empid : 2, firstName : "Sethu", lastName : "Raman", age : 40, eyeColor : "Blue"}
    ]

    const person1 = {
        empid : 0,
        firstName : "",
        lastName : "",
        age : 0,
        eyeColor : ""
    }


    person1.empid = 1;
    person1.firstName = "Gopinath";
    person1.lastName = "Paidakal";
    person1.age = 45;
    person1.eyeColor = "Blue";

    person1.empid = 2;
    person1.firstName = "Sethu";
    person1.lastName = "Raman";
    person1.age = 40;
    person1.eyeColor = "Blue";

   

    console.log(person);

  return (
    <div><h3>Testing</h3>
    
        <p>{person.firstName}</p>
        <p>{person.lastName}</p>
        <p>{person.age}</p>
        <p>{person.eyeColor}</p>
        
        <input type="text" id="id1" value = {person1.firstName} />
        <br></br>
        <input type="text" id="id2" value = {person1.lastName} />
        <br></br>
        <input type="text" id="id3" value = {person1.age} />
        <br></br>
        <input type="text" id="id4" value = {person1.eyeColor} />

        <table border="1">
        <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Eye Color</th>
            </tr>
        </thead>

        <tbody>
        {person.map((person, index) => (
          <tr key={person.empid}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
            <td>{person.eyeColor}</td>
          </tr>
        ))}
      </tbody>

        {/* <tbody>
            <tr>
            <td>{person1.firstName}</td>
            <td>{person1.lastName}</td>
            <td>{person1.age}</td>
            <td>{person1.eyeColor}</td>
            </tr>
          
        </tbody> */}
        </table>

         <select>			
            <option value="">Select Employee</option>
            {person.map((ele) => (
                <option value={ele?.firstName} key={ele?.empid}> 
                    {ele?.firstName}
                </option>
            ))}
        </select> 

      


    </div>
  
  )
}


 // const person = {
    //     firstName : "Gopinath",
    //     lastName : "Paidakal",
    //     age : 45,
    //     eyeColor : "blue"
    // };


        //     /* <select>	
							
        //     <option value="">Select Employee</option>
        //     {person.map((ele) => (
        //         <option value={ele?.firstName} key={ele?.empid}> 
        //             {ele?.firstName}
        //         </option>
        //     ))}
		// </select> */
       