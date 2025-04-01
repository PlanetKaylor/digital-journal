import notebook from '../assets/notebook-paper/1.png'
import beigePostIt from '../assets/stickers/top-right-beige-paper.png'

function Homepage() {
    return(
          <div class="relative h-screen w-full bg-cover bg-center"  style={{ backgroundImage: `url(${notebook})`}}>
                 <img src={beigePostIt} alt="Post-it 1" class="absolute -top-[400px] -right-[80px] w-[1080px] h-auto z-10 rotate-[3deg]"></img>
          </div>
    );
}

export default Homepage