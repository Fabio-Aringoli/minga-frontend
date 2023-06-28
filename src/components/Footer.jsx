export default function Footer() {
  return (
        <footer className='bg-white w-[100vw] h-[50vh]'>
          <div className='p-5 bg-orange-500 w[80vw] m-5 flex flex-col'>
            <div className='flex justify-between items-center'>
              <img src="./src/assets/image/flechaIzq.png"className=' h-[2rem]'/>
              <img src="./src/assets/image/nami.png" alt="nami" className='w-[7rem] h-[9rem] object-contain'/>
              <img src="./src/assets/image/portada.png" alt="portada one piece" className='h-[8rem] object-contain'/>
              <img src="./src/assets/image/flechaIzq.png"className='rotate-180 h-[2rem]'/>
            </div>
            <div>
              <h2 className='text-white text-center font-semibold'>Shonen</h2>
              <p className='text-white text-center'>Is the manga that is aimed at adolecescent boys. They are series with large amounts of acton, in which humorous situations often occur. The camaraderie between members of a collective or a combat teams stands out.</p>
            </div>
          </div>
        </footer>
  )
}
