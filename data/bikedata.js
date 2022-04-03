
    let Data=async()=>{
        try {
            let res=await fetch(`https://onnbike-clone.herokuapp.com/products`);
            let data= await res.json();
            localStorage.setItem("product_Data",JSON.stringify(data));
           } catch (error) {
            console.log({message:error.message});
        }
    };
         Data();