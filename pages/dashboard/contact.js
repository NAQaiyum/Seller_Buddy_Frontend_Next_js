export default function contact() {
    return (
      <div className="">
        <div className="flex flex-col items-center h-[400px] justify-center mr-[95px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <img
                src="/contact.jpg"
                alt="Customer Service"
                className="w-[250px] h-[250px] md:w-[300px] md:h-[300px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-center md:text-left text-sm md:text-base">
              Can't find the service you want? Contact us at 111999 any time.
              </p><br></br>
              <button className="bg-[#a32f60] hover:bg-[#be4a7a] hover:text-black text-white py-2 px-4 rounded w-[100px] md:w-[130px]">
                Request Service
              </button>
              <button className="bg-white hover:bg-[#a32f60] hover:text-white border border-[#a32f60] text-black py-2 px-4 rounded mt-2 w-[100px] md:w-[130px]">
                Call 111999
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  