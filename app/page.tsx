import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-24">
      

      <div >
        
        
        <Image
          
          src="/BookerPlanner-01.svg"
          alt="Next.js Logo"
          width={590}
          height={137}
          
        />
        {/* <h1 className={` text-5xl font-semibold`}>Coming soon...</h1> */}
        <h1 className='flex font-semibold text-3xl flex-col items-center py-5'>Coming soon...</h1>
      </div>


    </main>
  )
}
