export function DeviceMockup({ children }) {
  return (
    <div className="relative mx-auto border-gray-900 bg-gray-900 border-[8px] rounded-[2.5rem] h-auto w-[240px] shadow-xl overflow-hidden shrink-0">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-4 bg-gray-900 rounded-b-xl w-32 mx-auto z-10 flex justify-center items-end pb-1">
         <div className="w-8 h-1 bg-gray-950 rounded-full"></div>
      </div>
      {/* Screen */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
        {children}
      </div>
    </div>
  );
}
