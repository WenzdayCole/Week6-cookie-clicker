// import React, { useState, useEffect } from "react";

// export default function CookieCount() {
//     console.log("CookieCount component render");
//     const [count, setCount] = useState(0)
//     const [cps, setCps] = useState(1)

//     useEffect(() => {
//         console.log("CookieCount component useEffect call back");
//         const myInterval = setInterval(() => {
//             setCps((currentCookies) => {
//                 currentCookies + cps;
//             });
//         }, 1000);
//     }, []);

//         return () => {
//             clearInterval(myInterval);
//         };
  
// }


import React, { useState, useEffect } from "react";

export default function CookieCount() {
  console.log("CookieCount component render");

  const [count, setCount] = useState(0); 
  const [cps, setCps] = useState(1);

  useEffect(() => {
    console.log("CookieCount component useEffect callback");
const myInterval = setInterval(() => {
      setCount((currentCookies) => currentCookies + cps);
    }, 1000);
return () => {
      clearInterval(myInterval);
    };
  }, [cps])


return (
    <div>
   <p>Pokemon per second:</p> {CookieCount}
   {cps}
   </div>   
)

};