import Image from 'next/image'
const Links = () => {
  return (
    <>
      <p>Links</p>
    </>
  )
}
export default function Home() {
  return (
    //min-h-screen
    <main className="flex h-full w-full flex-col items-center justify-between p-24">
      <Links />
      <Links />
    </main>
  )
}
