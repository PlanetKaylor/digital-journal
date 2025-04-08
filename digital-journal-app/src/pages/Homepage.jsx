import notebook from '../assets/notebook-paper/notebook-3.png';
import beigePostItRight from '../assets/stickers/top-right-beige-paper.png';
import beigePostItLeft from '../assets/stickers/top-left-beige-paper.png';
import gridPostIt from '../assets/stickers/top-left-grid-paper.png';
import checkeredBlue from '../assets/stickers/blue-gingham-paper.png';
import receiptPaper from '../assets/stickers/receipt-paper.png';

function Homepage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
       <img src={notebook} alt="Notebook" className="absolute inset-0 w-full h-full object-cover object-left z-0"/>
       <img src={beigePostItLeft} alt="post-it-left" className="absolute bottom-0 left-0 translate-x-[-20%] translate-y-[50%] w-auto max-w-none z-30 rotate-[-2deg]"/>
       <img src={checkeredBlue} className="absolute bottom-0 left-0 translate-x-[-75%] translate-y-[50%] w-auto max-w-none z-30"></img>

    <div className="relative z-10">
       <img src={beigePostItRight} alt="post-it-right" className="absolute top-0 right-0 translate-x-[20%] translate-y-[-40%] w-[60vw] sm:w-[70vw] lg:w-[85vw] max-w-[1000px] z-20 rotate-[-2deg]"/>
       <img src={receiptPaper} alt="post-it-right" className="absolute top-0 right-0 translate-x-[20%] translate-y-[-70%] w-[60vw] sm:w-[70vw] lg:w-[85vw] max-w-[1000px] z-20 rotate-[-2deg]"/>
       <img src={gridPostIt} alt="grid-post-it" className="absolute top-0 left-0 -translate-x-[30%] translate-y-[-25%] w-[70vw] sm:w-[80vw] lg:w-[90vw] max-w-[850px] z-10"/>
      </div> 
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-50 px-4">
        <h1 className="font-Hibernate text-5xl sm:text-6xl md:text-9xl text-black">A DIGITAL</h1>
        <h2 className="font-GuruFont text-4xl sm:text-5xl md:text-8xl text-black mt-2">BULLET JOURNAL</h2>
        <p className="text-md sm:text-lg md:text-xl text-black mt-4 max-w-xl">
          Modern journaling for mindful creatives.
        </p>
        <button className="mt-6 bg-neutral-900 text-white px-6 py-3 rounded-full text-lg hover:bg-neutral-800 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
export default Homepage;