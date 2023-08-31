import Image from 'next/image'


export default function Home() {
  return (
    <main className=" flex min-h-screen flex-1	place-items-center px-24 place-content-center">
      <h5 className='flex flex-col text-4xl font-sans px-3 text-white	-mt-[14rem] not-italic drop-shadow-2xl'>WELCOME TO</h5> 
      <h1 className='flex flex-col text-5xl	font-extrabold -mt-[14rem] text-green-700 drop-shadow-2xl'>PLEARN</h1>
      <div className='flex-1 fixed mb-64 mr-96 -ml-96 -ml-[37rem] -mt-[6rem]	'>
      <Image 
      src="/plearnbg.png"
      width={300}
      height={300}
      alt="Picture of the author"
    />
      </div>
      <div className='flex-1 flex flex-col fixed mb-96 -mt-16 -mr-72 -mt-[7rem] -ml-[10rem]'>
      <Image 
      src="/plearnbg1.png"
      width={250}
      height={250}
      alt="Picture of the author"
    />
      </div>
      <div className=' fixed flex flex-col mb-10 -mt-16 -mr-96 ml-96 ml-[36rem] mt-[10rem]	'>
      <Image 
      src="/plearnbg2.png"
      width={400}
      height={300}
      alt="Picture of the author"
    />
      </div>
      <div className=' fixed flex flex-col mr-[42rem] -mb-[16rem] '>
      <Image 
      src="/plearnbg3.png"
      width={700}
      height={700}
      alt="Picture of the author"
    />
      </div>
      <div className=' fixed flex-col -mt-[26.5rem] -mb-[20rem] -ml-[12rem] '>
      <Image 
      src="/login.png"
      width={12}
      height={12}
      alt="Picture of the author"
    />
    <div className=' text-white -mt-[0.9rem] ml-[1rem]  decoration-wavy text-xs'>Username</div>      
      </div>
      <input className=' text-black	 absolute flex flex-col drop-shadow-md rounded text-lg  outline-none text-start  hover:bg-orange indent-4  bg-blue-200 -mb-[1rem] pt-[0.3rem] pb-[0.5rem] -ml-[1.2rem] -mt-[2.5rem]' type="username" name='username' placeholder='Enter Username'/>
      <div className=' flex flex-col absolute -ml-[12rem] -mb-[4.5rem] '>
      <Image 
      src="/password.png"
      width={12}
      height={12}
      alt="Picture of the author"
    />
    <div className=' text-white -mt-[1rem] ml-[1rem]  decoration-wavy text-xs  '>Password</div>      
      </div>
      <input className='outline-none text-black	 absolute flex flex-col pt-[0.3rem] pb-[0.5rem] -ml-[1.2rem] -mb-[9.5rem] drop-shadow-md rounded text-lg  text-start  hover:bg-orange indent-4  bg-blue-200 border border-transparent' type="username" name='username' placeholder='Enter Password'/>
      
      <button className='flex flex-col absolute border-yellow-500 bg-yellow-600 hover:bg-green-500   focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 pr-[6rem] pl-[5.9rem] -ml-[1.4rem] -mb-[19rem] pt-[1rem] pb-[1rem] '>Login</button>


      
  </main>
  )
}
