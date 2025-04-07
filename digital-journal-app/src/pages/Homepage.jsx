import notebook from '../assets/notebook-paper/notebook-3.png';
import beigePostItRight from '../assets/stickers/top-right-beige-paper.png';
import beigePostItLeft from '../assets/stickers/top-left-beige-paper.png';
import gridPostIt from '../assets/stickers/top-left-grid-paper.png';
import frog from '../assets/stickers/paper-frog.png';

function Homepage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
       <img src={notebook} alt="Notebook" className="absolute inset-0 w-full h-full object-cover object-left z-0"/>
       <img src={beigePostItLeft} alt="post-it-left" className="absolute bottom-0 left-0 translate-x-[-20%] translate-y-[50%] w-auto max-w-none z-30 rotate-[-2deg]"/>
      
    <div className="relative z-10">
       <img src={beigePostItRight} alt="post-it-right" className="absolute top-0 right-0 translate-x-[20%] translate-y-[-40%] w-[60vw] sm:w-[70vw] lg:w-[85vw] max-w-[1000px] z-20 rotate-[-2deg]"/>
       <img src={gridPostIt} alt="grid-post-it" className="absolute top-0 left-0 -translate-x-[30%] translate-y-[-25%] w-[70vw] sm:w-[80vw] lg:w-[90vw] max-w-[850px] z-10"/>
       <h1 className="absolute top-[10%] left-[10%] font-Hibernate text-4xl sm:text-5xl md:text-6xl text-blue-600 z-40">Sticky Thoughts</h1>
      </div> 
      <div className="relative top-[50%] left-[10%] z-60 bg-blue-500"></div>

    </div>
  );
}
export default Homepage;