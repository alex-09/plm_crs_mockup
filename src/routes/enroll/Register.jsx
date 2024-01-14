export default function Register() {
    return (
        <>
            <div>
                <main >

                 
                    <div className="flex flex-col items-center justify-center z-50 mb-10">
                        

                        <p className="flex justify-center items-center mt-4 w-full">
                            <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M56.5 29.5C56.5 44.9883 44.1638 57.5 29 57.5C13.8362 57.5 1.5 44.9883 1.5 29.5C1.5 14.0118 13.8362 1.5 29 1.5C44.1638 1.5 56.5 14.0117 56.5 29.5Z" fill="white" stroke="#800000" stroke-width="3"/>
                                <path d="M34.4761 6.45454L33.5897 39.0455H25.2716L24.3625 6.45454H34.4761ZM29.4306 53.5909C27.9306 53.5909 26.6428 53.0606 25.567 52C24.4913 50.9242 23.9609 49.6364 23.9761 48.1364C23.9609 46.6515 24.4913 45.3788 25.567 44.3182C26.6428 43.2576 27.9306 42.7273 29.4306 42.7273C30.87 42.7273 32.1352 43.2576 33.2261 44.3182C34.317 45.3788 34.87 46.6515 34.8852 48.1364C34.87 49.1364 34.6049 50.053 34.0897 50.8864C33.5897 51.7045 32.9306 52.3636 32.1125 52.8636C31.2943 53.3485 30.4003 53.5909 29.4306 53.5909Z" fill="#800000"/>
                            </svg>
                            <span className="ml-2">IMPORTANT NOTICE</span>
                        </p>
                        {/* Red Box Section */}
      <div className="border border-[#800000] p-4 mb-8 text-center border-2 w-1/2">
        <p className="font-bold">Click the download button to save a copy or print your Student Enrollment Record (SER) to be officially registered or enrolled, and be added to your subject’s MS Teams.</p>
        <p>The Start of classes will be on August 29, 2023</p>
      </div>

      {/* Download Button */}
      <button className="bg-[#800000] text-white px-4 py-2 rounded">Download</button>
   
                    </div>
                </main>
            </div>
        </>
    )
}