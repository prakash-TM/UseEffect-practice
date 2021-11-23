// import ApiReq from "./Utilities/Network/PracticeIndex"
// import { useEffect, useState } from "react"

// const UseEff=()=>{
//     const[count,setCount]=useState(0)
//     const[value,setValue]=useState("")
//     const[inp,setInp]=useState("")
//     console.log("inside useEff")
//     useEffect(()=>{
//         console.log("inside useEffect")
//         const _reqpi=async()=>{
//             const respi=await ApiReq("https://api.publicapis.org/entries")
    
//             if(!respi){
//                 return
//             }
//             setValue(respi.entries[0])
//             console.log({value})
    
        
//         }
//     _reqpi();


//     },[count])
    
//     const _fungit=async()=>{

//         const out= await ApiReq(`https://api.github.com/users/${inp}`)
//         console.log(out)
//     }

//     return (
//         <>
//         <p>HI, PLEASE ENTER YOUR GITHUB PROFILE NAME</p>
//         <input type="text"  onChange={(e)=>{setInp(e.target.value)}}/>
//         <button onClick={_fungit}>clickgit</button>
//         <button onClick={()=>{(setCount(count+1))}}>click</button>
        
//         </>
//     )
   

// }

// export default UseEff




import ApiReq from "./Utilities/Network/PracticeIndex";
import { useEffect, useState } from "react";

const UseEff = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [inp, setInp] = useState("");
  const [profileInfo, setProfileInfo] = useState([]);
  const[profileValues,setProfileValues]=useState([])
  console.log("inside main function (UseEff)");
  useEffect(() => {
    console.log("inside useEffect");
    const _reqpi = async () => {
      const respi = await ApiReq("https://api.publicapis.org/entries");

      if (!respi) {
        return;
      }
      setValue(respi.entries[0]);
      console.log({ value });
    };
    _reqpi();
  }, [count]);

  const _fungit = async () => {
    const out = await ApiReq(`https://api.github.com/users/${inp}`);
    setProfileInfo(Object.keys(out));
    setProfileValues(Object.values(out))
    // console.log(profileInfo);
  };
  

//   const _information = () => {
//     for (let i = 0; i < profileInfo.length; i++) {
//       return profileInfo[i];
//     }
//   };

  return (
    <>
      <p>HI, PLEASE ENTER YOUR GITHUB PROFILE NAME (EX:prakash-TM)</p>
      <input
        type="text"
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />
      <div style={{ marginTop: "20px" }}>
        
        <button onClick={_fungit}>Get profile info</button>
        <p>Once you click the counter increase button you will get the new datum in the name of value object. after click see the console</p>
        <button onClick={()=>{(setCount(count+1)) }}>counter increase</button>
        
        <div >
          {profileInfo.map((item: any, index: any) => {
              
            return (
              <div key={index}>
                 
                <h4>{item}  : {profileValues[index]}</h4>
              </div>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default UseEff;
