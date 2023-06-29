import Arrows from "./Arrows"

export default function Carrousel() {

  let icon_left = "M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
  let icon_right = "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
  return (
          <div className=' bg-gradient-to-r from-[#FF5722] to-[#F97316] w-[auto]  m-5 p-5 flex 
            flex-col rounded-md'>
            <div className='flex justify-between items-center'>
              <Arrows icon = {icon_left}/>
              <img src="./src/assets/image/nami.png" alt="nami" className='w-[7rem] h-[9rem] object-contain'/>
              <img src="./src/assets/image/portada.png" alt="portada one piece" className='h-[8rem] object-contain'/>
              <Arrows icon = {icon_right}/>
            </div> 
            <div>
              <h2 className='text-white text-center font-semibold'>Shonen</h2>
              <p className='text-white text-center'>Is the manga that is aimed at adolecescent boys. They are series with large amounts of acton, in which humorous situations often occur. The camaraderie between members of a collective or a combat teams stands out.</p>
            </div>

          </div>
  )
}
