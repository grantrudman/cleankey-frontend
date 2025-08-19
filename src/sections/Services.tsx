'use client';

type Step = {
  title: string;
  description: string;
  icon: string;
};

const steps: Step[] = [
  {
    title: 'Get Your Quote',
    description: 'Receive a customized quote within 24 hours. No hidden fees, no surprises – just transparent pricing for your specific property needs.',
    icon: '💰',
  },
  {
    title: 'Schedule & Confirm',
    description: 'Lock in your cleaning schedule with our professional team. We handle all the details so you can focus on hosting exceptional guests.',
    icon: '📅',
  },
  {
    title: 'Relax & Earn',
    description: 'Your property is transformed into a 5-star guest experience. Enjoy higher ratings, repeat bookings, and maximum revenue potential.',
    icon: '⭐',
  },
];

export const Services = () => {

  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#FFFFFF] to-[#FCFCFA] py-20 overflow-hidden" id="services-section">
      <div className="container">
        <div className="md:pl-8">
          <h2 className="section-title pt-8">Professional Cleaning That Drives Results</h2>
          <p className="section-description mt-5">Transform your short-term rental into a guest magnet. Our expert cleaning services boost your ratings, increase bookings, and maximize your revenue – all while saving you time and stress.</p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#5DCCB7] mb-2">98%</div>
            <p className="text-sm text-gray-600">Guest Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#5DCCB7] mb-2">24hr</div>
            <p className="text-sm text-gray-600">Turnaround Time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#5DCCB7] mb-2">4.9★</div>
            <p className="text-sm text-gray-600">Average Host Rating</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="relative mt-20 max-w-[600px] mx-auto rounded-3xl overflow-hidden
          border-4 border-[#5DCCB7] animate-borderColorSweep
          bg-gradient-to-br from-[#F9FAFB] to-[#FFFFFF] px-8 py-16 shadow-2xl">
          <h3 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0D4D62] text-transparent bg-clip-text mb-4">
            How It Works for Property Owners
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">
            We&apos;ve streamlined the process so you can start earning more with less effort
          </p>
          
          <div className="relative flex flex-col space-y-12 max-w-lg mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#5DCCB7] to-[#0D4D62] text-white font-bold text-sm shadow-lg z-10 mb-4">
                  {index + 1}
                </div>
                
                {/* Step Content */}
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center" onClick={scrollToQuote}>
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#5DCCB7] to-[#0D4D62] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Start Earning More Today →
            </div>
          </div>
        </div>
        
        {/* Trust Indicators
        <div className="mt-16 text-center px-6">
          <p className="text-xs text-gray-500 mb-3 md:text-sm md:mb-4">Trusted by 500+ Property Owners</p>
          <div className="flex flex-col space-y-2 items-center md:flex-row md:justify-center md:items-center md:space-y-0 md:space-x-6 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="text-lg md:text-2xl">🏆</div>
              <div className="text-xs text-gray-600 md:text-sm">Licensed & Insured</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-lg md:text-2xl">✅</div>
              <div className="text-xs text-gray-600 md:text-sm">100% Satisfaction Guarantee</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-lg md:text-2xl">⚡</div>
              <div className="text-xs text-gray-600 md:text-sm">Same-Day Service Available</div>
            </div>
          </div>
        </div>
        */}
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