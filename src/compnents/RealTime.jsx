export default function RealTime() {
  return (
    <div className="max-w-md mx-auto p-6 ">
      {/* Notification Card */}
      <div className="bg-gray-50 rounded-2xl p-4 mb-8 shadow-xl">
        {/* Header with icon and title */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-[#F0D6F4] rounded-full p-1  flex items-center justify-center">
            <img src='/purpleLogo.png'  className=''  alt='purpleLogo.png'/>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-md">
              Heads up, Youssef 👀
            </h3>
          </div>
        </div>

        {/* Main message */}
        <p className="text-gray-700 text-sm leading-relaxed ">
          Your "Travel Fund" portfolio is drifting from your target mix.
        </p>

        <p className="text-gray-700 text-sm leading-relaxed ">
          Markets shifted a bit. No panic – just a good time to review and rebalance.
        </p>

        {/* Action link */}
        <button className="text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors flex items-center gap-1">
          View suggested changes
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </button>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl  text-gray-900 mb-6 leading-tight">
        Real-time tracking & alerts
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed">
        Smart nudges and helpful updates. Just the right amount of "hey, check this."
      </p>
    </div>
  );
}