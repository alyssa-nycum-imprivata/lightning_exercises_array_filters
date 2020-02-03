import businesses from './businesses.js';

const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// Array to contain all businesses

// const allBusinesses = businesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });


// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false
  
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
  
//     return inNewYork
//   })

  // Array to contain all the Manufacturing businesses
      
//   outEl.innerHTML = "<h1>Manufacturing Businesses</h1>"

//   const manufacturingBusinesses = businesses.filter(business => {
//       let isManufacturing = false

//       if (business.companyIndustry === "Manufacturing") {
//           isManufacturing = true
//       }
//       return isManufacturing
//   })

//   console.log(manufacturingBusinesses);

// manufacturingBusinesses.forEach(business => {
//     outEl.innerHTML += `
//       <h2>${business.companyName}</h2>
//       <section>
//         ${business.addressFullStreet}
//       </section>
//       <section>
//       ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
//       </section>
//     `
//     outEl.innerHTML += "<hr/>"
//   });

// Array to contain all the Purchasing Agents

outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    return {
        "firstName": business.purchasingAgent.nameFirst,
        "lastName": business.purchasingAgent.nameLast,
        "company": business.companyName,
        "phoneNumber": business.phoneWork
    }
})

console.table(agents)

agents.forEach(agent => {
  outEl.innerHTML += 
  `<h2>${agent.firstName} ${agent.lastName}</h2>
  <p>${agent.company}</p>
  <p>${agent.phoneNumber}</p>`;
  outEl.innerHTML += "<hr/>";
});

