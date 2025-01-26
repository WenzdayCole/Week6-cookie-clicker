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
    <><div className="score-board">
    <p>Pokemon per second: {cps}</p>
    <p>Total Pokémon: {count}</p>
    {/* So, I could not figure out how to display the total pokemon count, I was trying to display the actual function like, <p>Total Pokemon {CookieCount}</p> my brother said to put it into Chatgpt, I told him we are not allowed to do that. But, he did it anyway and it built a working cookie clicker, I didn't want to use that code. I just compared it to mine and only changed this one line. I then understood that the function is running in the background, I just needed to display the count that changes, not the actual function. Hope that's ok.  */}
  </div>
  <div>
      <img onClick={() => {
        setCount(count + 1);
      } } src="src/images/pokeball.png" className="pokeball">

      </img>
    </div></>

)


  // <div>
  //   <button onClick={() => {
  //     setCount(currentCookies + 1);
  //   }}>
  //     Click!
  //  </button>
  // </div>


};

