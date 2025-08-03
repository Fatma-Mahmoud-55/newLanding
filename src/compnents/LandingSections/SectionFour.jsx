import Image from 'next/image';
import FincScoreSection from "../FincScoreSection";
import Advice from "../Advice";
import RealTime from "../RealTime";

const SectionFour = () => {
  return (
    <div className="w-full   min-h-screen relative">
      {/* Background overlay */}
      <div className="absolute inset-0 w-full h-full bg-purple-900 opacity-20"></div>
      
      {/* Main content container */}
      <div className="relative z-10 w-full min-h-screen  bg-white overflow-hidden lg:rounded-b-[50px] md:rounded-b-[30px] rounded-b-[25px]">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <div className="absolute md:-mr-60 mr-0 md:bottom-32 md:top-auto top-20  transform flex justify-end">
            <img 
              src="/ring.png" 
              alt="ring" 
              className="md:w-6/12 w-full animate-spin"
              style={{
                animation: 'spin 80s linear infinite'
              }}
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl  mx-auto p-4 grid md:grid-cols-2 mg:gap-1 gap-4 h-full"> 
       
           <div className=' md:w-md w-full h-fit order-2 md:order-1 my-auto'>
  <FincScoreSection icon={false}
                title="fincr - your smart money buddy"
                desc="Ask anything. Learn everything.No confusion. No complexity. Just answers you actually understand and trust."
                />            </div>
          <div className=" w-full h-full flex justify-center order-1 md:order-2">
            <img 
              src="/2iphones.png" 
              alt="iphones" 
              className=" h-[90%]  "
            
            />
          </div>
         
         
        </div>
                <div className="relative z-20 max-w-7xl  mx-auto p-4 flex md:flex-row flex-col md:gap-10 gap-5  h-full"> 
 <div className=" w-fit h-full col-span-1 border border-gray-200 rounded-2xl bg-white ">
          <RealTime/>
          </div>
          <div className=" h-full w-fit col-span-1 border border-gray-200 rounded-2xl bg-white">
          <Advice/>
          </div>

      </div>
      </div>
    </div>
  );
};

export default SectionFour;