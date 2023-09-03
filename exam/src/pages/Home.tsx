import React from 'react'
import axios from 'axios'

type card={
    image:string,
    title:string,
    id:string
}

function Home() { 
    const [pdata, setData] = React.useState<card>([])

    React.useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            console.log(response.data)
          setData(response.data);
        });
      }, []);



  return (
    <>
        {pdata.map((item) => {
            <h1>{item.title}</h1>
        })}
    <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src=""
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600 ">
        
      </p>
    </div>
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src=""
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600 ">
        
      </p>
    </div>
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src=""
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600 ">
        
      </p>
    </div>
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src=""
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600">
        
      </p>
    </div>
    
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src=""
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600">
        
      </p>
    </div>
    
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src=""
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600">
        
      </p>
    </div>
    
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src=""
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600">
        
      </p>
    </div>
    
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src=""
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600">
        
      </p>
    </div>
    
  </div>
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        className="rounded-t-lg"
        src=""
        alt="" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
        Card title
      </h5>
      <p className="mb-4 text-base text-neutral-600">
        
      </p>
    </div>
    
  </div>
</div>
    
    </>
  )
}

export default Home