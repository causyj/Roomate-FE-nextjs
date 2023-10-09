import Image from 'next/image'

export default function Home() {
  return (
    //min-h-screen
    <main className="flex h-full w-full flex-col items-center justify-between p-24">
      <div className='text-primary-accent'>test1</div>
      <div className='text-primary-yellow'>test2</div>
      <div className='text-teal-700'>test3</div>
      <div className='text-purple-600'>test4</div>

      
    </main>
  )
}
