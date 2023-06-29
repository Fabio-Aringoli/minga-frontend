import Button from "./Button"

export default function Footer(){
    return(
        <footer className='flex flex-col justify-between items-center'>
            <img src="./src/assets/image/backgroundFooter.png" className="object-contain rounded-t-none rounded-b-full"/>
            <div className="flex flex-col items-center  sm:flex-row sm:justify-between">
                <p>Home</p>
                <p>Mangas</p>
                <img src="./src/assets/image/LogoDos.png"/>
                <div className="flex-col">
                    <div className="flex justify-between h-[1rem] m-5">
                        <img src="./src/assets/image/facebook-black.png" alt="logo media"/>
                        <img src="./src/assets/image/twitter-black.png" alt="logo media"/>
                        <img src="./src/assets/image/vimeo-black.png" alt="logo media"/>
                        <img src="./src/assets/image/youtube-black.png" alt="logo media"/>
                    </div>
                    <div className="flex justify-center">
                    <Button title= "Donate"/>
                    </div>
                </div>
            </div>
            <hr />
        </footer>
    )
}