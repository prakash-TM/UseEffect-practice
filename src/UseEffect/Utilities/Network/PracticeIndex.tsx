const ApiReq=async (url : any)=>{
    const apires=await fetch(url);
    const res= apires.json();
    return res;

}

export default ApiReq