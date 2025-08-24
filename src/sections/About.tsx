"use client";

type PainPoint = {
  text: string;
};

type Solution = {
  text: string;
};

const painPoints: PainPoint[] = [
  {
    text: 'Last-minute cleaner cancellations ruining your bookings',
  },
  {
    text: 'Poor cleaning quality leading to bad guest reviews',
  },
  {
    text: 'Missed turnovers costing you revenue and your peice of mind',
  },
];

const solutions: Solution[] = [
  {
    text: 'Same-day completion within 4 hours - guaranteed',
  },
  {
    text: '5-star cleaning quality that guests rave about',
  },
  {
    text: '100% reliability - we\'ve never missed a clean',
  },
];

export const About = () => {
  return (
    <section id="about-section" className="relative bg-gradient-to-b from-[#FFFFFF] to-[#FCFCFA] py-20 overflow-hidden scroll-mt-[70px]" >
      <div className="container">
        <div className="md:pl-8">
          <h2 className="section-title pt-8">Built by Property Owners, For Property Owners</h2>
          <p className="section-description mt-5">After years in the industry, we discovered that <strong>cleaning is consistently the most difficult and stressful part of property ownership</strong>. That&#39;s why we created CleanKey – to make turnover management as streamlined and simple as possible, so you can focus on what matters most: maximizing your investment.</p>
        </div>

        {/* Desktop Layout: Side by Side */}
        <div className="hidden lg:block">
          {/* Column Headers */}
          <div className="grid grid-cols-2 gap-16 mb-8 mt-20 max-w-[900px] mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                The Problems You Face
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-[#5DCCB7] to-[#0D4D62] text-transparent bg-clip-text">
                Our Solution
              </h3>
            </div>
          </div>

          {/* Problem vs Solution Cards */}
          <div className="space-y-8 max-w-[900px] mx-auto">
            {painPoints.map((point, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                <div className="absolute left-1/2 top-1/2 w-16 h-0.5 bg-gradient-to-r from-red-400 to-[#5DCCB7] transform -translate-y-1/2 -translate-x-1/2 z-10">
                  <div className="absolute right-0 top-1/2 w-0 h-0 border-l-[8px] border-l-[#5DCCB7] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent transform -translate-y-1/2"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-16">
                  {/* Problem Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-50 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1">
                          <div className="w-3 h-3 rounded-full bg-white"></div>
                        </div>
                        <p className="text-gray-700 font-medium leading-relaxed">{point.text}</p>
                      </div>
                    </div>
                  </div>

                  {/* Solution Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5DCCB7]/20 to-[#0D4D62]/20 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#5DCCB7] hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5DCCB7] flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <p className="text-gray-700 font-semibold leading-relaxed">{solutions[index].text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout: Stacked */}
        <div className="lg:hidden mt-16">
          {/* Pain Points Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                The Problems You Face
              </h3>
            </div>
            
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div key={`problem-${index}`} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-50 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed">{point.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-[#5DCCB7] to-[#0D4D62] text-transparent bg-clip-text">
                Our Solution
              </h3>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={`solution-${index}`} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5DCCB7]/20 to-[#0D4D62]/20 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#5DCCB7] hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5DCCB7] flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <p className="text-gray-700 font-semibold leading-relaxed">{solution.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center max-w-[900px] mx-auto">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5DCCB7] to-[#0D4D62] rounded-full blur opacity-30 transform scale-110"></div>
            <a href="#quote-section" className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#5DCCB7] to-[#0D4D62] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Get a Free Quote →
            </a>
          </div>
        </div>
      </div>
      

      <style jsx>{`
        @keyframes borderColorSweep {
          0% { border-color: #5DCCB7; }
          25% { border-color: #0D4D62; }
          50% { border-color: #5DCCB7; }
          75% { border-color: #0D4D62; }
          100% { border-color: #5DCCB7; }
        }

        .animate-borderColorSweep {
          animation: borderColorSweep 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};