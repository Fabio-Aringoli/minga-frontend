import Button from "../components/Button"

export default function Index() {
  return (
    <main className='bg-cover bg-center bg-no-repeat bg-[url("./src/assets/image/background.png")] inline-flex flex-col items-center justify-center gap-[1.5rem] min-h-[85vh] w-full '>
      <div className='w-[100vw] flex flex-col items-center'>
        <h1 className='font-size[1rem] text-white jus text-4xl font-bold'>For the love of mangas</h1>
        <p className='text-white'>Explore our varieties</p>
        <p className='text-white'>#MangaLove</p>
        <Button title= "¡Sign in!"/>
      </div>
    </main>
    
  )
}