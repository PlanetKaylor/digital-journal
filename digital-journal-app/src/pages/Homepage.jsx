import notebook from '../assets/notebook-paper/1.png'
import beigePostItRight from '../assets/stickers/top-right-beige-paper.png'
import beigePostItLeft from '../assets/stickers/top-left-beige-paper.png'
import gridPostIt from '../assets/stickers/top-left-grid-paper.png'

function Homepage() {
    return(
          <div className="relative h-screen w-full bg-cover bg-center overflow-hidden"  style={{ backgroundImage: `url(${notebook})`}}>
                <h1 className="font-notebook text-4xl"> My journal header with a custom font ✍️</h1>    

                 <img src={beigePostItRight} alt="post-it-right" className="absolute -top-[640px] -right-[120px] w-[1600px] h-auto z-10 rotate-[0deg]"></img>
                 <img src={gridPostIt} alt="grid-post-it" className="absolute -top-[400px] -left-[280px] w-[1080px] h-auto z-10"></img>
                 <img src={beigePostItLeft} alt="post-it-left" className="absolute -bottom-[900px] -left-[280px] w-[1680px] h-auto z-0"></img>  

          </div>
    );
}

export default Homepage