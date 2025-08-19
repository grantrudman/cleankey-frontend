import { twMerge } from 'tailwind-merge'
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

// Updated testimonials focused on cleaning service benefits
const testimonials = [
  {
    text: "Since partnering with this cleaning service, my Airbnb bookings increased by 40%. Guests consistently mention how spotless and welcoming the space feels.",
    imageSrc: avatar1.src,
    name: "Sarah Mitchell",
    username: "Property Owner • 3 Units",
    rating: 5,
    revenue: "+$2,400/month"
  },
  {
    text: "The turnaround time is incredible. I can have back-to-back bookings without worrying about cleaning logistics. It's been a game-changer for my business.",
    imageSrc: avatar2.src,
    name: "Marcus Rodriguez",
    username: "Superhost • 5 Units",
    rating: 5,
    revenue: "+$3,200/month"
  },
  {
    text: "My guest reviews went from 4.2 to 4.9 stars after switching to this service. The attention to detail is unmatched - they clean things I never even thought of.",
    imageSrc: avatar3.src,
    name: "Jennifer Kim",
    username: "Property Owner • 2 Units",
    rating: 5,
    revenue: "+$1,800/month"
  },
  {
    text: "I was skeptical about the cost, but the ROI has been phenomenal. Higher ratings mean more bookings, and I can charge premium rates now.",
    imageSrc: avatar4.src,
    name: "David Thompson",
    username: "Property Investor • 8 Units",
    rating: 5,
    revenue: "+$5,600/month"
  },
  {
    text: "The peace of mind is worth every penny. I never worry about cleanliness complaints anymore, and my properties book faster than ever.",
    imageSrc: avatar5.src,
    name: "Lisa Chen",
    username: "Property Owner • 1 Unit",
    rating: 5,
    revenue: "+$900/month"
  },
  {
    text: "Their COVID-19 deep cleaning protocols gave me confidence to keep operating during uncertain times. Guests feel safe and comfortable.",
    imageSrc: avatar6.src,
    name: "Robert Johnson",
    username: "Property Manager • 12 Units",
    rating: 5,
    revenue: "+$8,400/month"
  },
  {
    text: "I used to spend 3-4 hours cleaning between guests. Now I focus on growing my portfolio while they handle the cleaning perfectly.",
    imageSrc: avatar7.src,
    name: "Amanda Foster",
    username: "Property Owner • 4 Units",
    rating: 5,
    revenue: "+$2,800/month"
  },
  {
    text: "The supply restocking service is brilliant. Guests never run out of essentials, and my ratings reflect that attention to detail.",
    imageSrc: avatar8.src,
    name: "Kevin Park",
    username: "Superhost • 6 Units",
    rating: 5,
    revenue: "+$4,200/month"
  },
  {
    text: "Emergency cleanings have saved me multiple times. When guests leave unexpected messes, they're there within hours to fix it.",
    imageSrc: avatar9.src,
    name: "Michelle Adams",
    username: "Property Owner • 3 Units",
    rating: 5,
    revenue: "+$2,100/month"
  },
];

const firstColumn = testimonials.slice(0,3);
const secondColumn = testimonials.slice(3,6);
const thirdColumn = testimonials.slice(6,9);

const TestimonialsColumn = (props: {
  className?: string; 
  testimonials: typeof testimonials;
}) => (
  <div 
  className={twMerge(
    "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to bottom, transparent, black_25%, black_75%, transparent)]",
    props.className
  )}
  >
  {props.testimonials.map(({text, imageSrc, name, username, rating, revenue}, index) => (
    <div key={index} className="card relative bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Revenue Badge */}
      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#5DCCB7] to-[#0D4D62] text-white text-xs font-bold px-3 py-1 rounded-full">
        {revenue}
      </div>
      
      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">⭐</span>
        ))}
      </div>
      
      <div className="text-gray-700 mb-4 italic">{text}</div>
      
      <div className="flex items-center gap-3">
        <img src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full border-2 border-[#5DCCB7]"/>
        <div className="flex flex-col">
          <div className="font-semibold tracking-tight leading-5 text-gray-900">{name}</div>
          <div className="leading-5 tracking-tight text-[#5DCCB7] text-sm font-medium">{username}</div>
        </div>
      </div>
    </div>
  ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-gray-50 relative overflow-hidden" id="testimonials-section">
      
      <div className="container relative">
        {/* Enhanced Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="section-title pt-24 mb-4">
            Real Property Owners, Real Results
          </h2>
          <p className="section-description mt-5">
            Join 500+ successful property owners who&apos;ve transformed their short-term rentals with our professional cleaning services. 
            See how they&apos;re earning more, getting better reviews, and saving time.
          </p>
          
          {/* Impact Statistics */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#5DCCB7] mb-1">+$3,200</div>
              <div className="text-sm text-gray-600">Average Monthly Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#5DCCB7] mb-1">4.8→4.9</div>
              <div className="text-sm text-gray-600">Average Rating Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#5DCCB7] mb-1">95%</div>
              <div className="text-sm text-gray-600">Client Retention Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="flex justify-center gap-6 pb-16">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:flex"/>
        </div>

        {/* Call to Action */}
        <div className="text-center pb-24">
          <div className="bg-gradient-to-r from-[#5DCCB7] to-[#0D4D62] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Them?</h3>
            <p className="text-white/90 mb-6">
              Start earning more with professional cleaning that your guests will love
            </p>
            <a 
              href="#quote-section" 
              className="inline-block bg-white text-[#0D4D62] font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};