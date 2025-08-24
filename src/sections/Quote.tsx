'use client';

// At the top of your Quote component, add this:
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://web-production-1fb6.up.railway.app'  // Added https://
  : 'http://localhost:8000'

import React, { useState } from 'react';

export const Quote = () => {
  const [beds, setBeds] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [halfBathrooms, setHalfBathrooms] = useState('');
  const [fullBathrooms, setFullBathrooms] = useState('');
  const [livingRooms, setLivingRooms] = useState('');
  const [kitchens, setKitchens] = useState('');
  const [exteriorFeatures, setExteriorFeatures] = useState('');
  const [extraSpaces, setExtraSpaces] = useState('');
  const [carpetArea, setCarpetArea] = useState(0);
  const [hardFloorsArea, setHardFloorsArea] = useState(0);
  const [petsAllowed, setPetsAllowed] = useState<boolean | null>(null);
  const [hourlyRate, setHourlyRate] = useState(40);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');

  // New state for form submission
  const [isLoading, setIsLoading] = useState(false);
  type QuoteResult = { quote: number; [key: string]: any };
  const [quote, setQuote] = useState<QuoteResult | null>(null);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Helper function to handle numeric input changes
  const handleNumericChange = (value: string, setter: (val: string) => void) => {
    // Allow empty string or valid numbers
    if (value === '' || (!isNaN(Number(value)) && parseInt(value) >= 0)) {
      setter(value);
    }
  };

  const validateForm = () => {
    // Check property details
    if (beds === '') {
      setError('Please enter the number of beds');
      return false;
    }
    if (bedrooms === '') {
      setError('Please enter the number of bedrooms');
      return false;
    }
    if (halfBathrooms === '') {
      setError('Please enter the number of half bathrooms');
      return false;
    }
    if (fullBathrooms === '') {
      setError('Please enter the number of full bathrooms');
      return false;
    }
    if (livingRooms === '') {
      setError('Please enter the number of living rooms');
      return false;
    }
    if (kitchens === '') {
      setError('Please enter the number of kitchens');
      return false;
    }
    if (exteriorFeatures === '') {
      setError('Please enter the number of exterior features');
      return false;
    }
    if (extraSpaces === '') {
      setError('Please enter the number of extra spaces');
      return false;
    }
    if (carpetArea === 0 && hardFloorsArea === 0) {
      setError('Please enter carpet area and/or hard floors area');
      return false;
    }
    if (petsAllowed === null) {
      setError('Please select whether pets are allowed');
      return false;
    }
    
    // Check contact information
    if (!name.trim()) {
      setError('Please enter your full name');
      return false;
    }
    if (!email.trim()) {
      setError('Please enter your email address');
      return false;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!address.trim()) {
      setError('Please enter the property address');
      return false;
    }
    if (!city.trim()) {
      setError('Please enter the city');
      return false;
    }
    if (!state.trim()) {
      setError('Please enter the state');
      return false;
    }
    if (!zipCode.trim()) {
      setError('Please enter the zip code');
      return false;
    }
    return true;
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError('');
  
  if (!validateForm()) {
    return;
  }

  setIsLoading(true);

  // Fixed field mapping to match FastAPI backend expectations
  const formData = {
    // Contact info - corrected field names
    full_name: name,                    // ✅ Changed from 'name' to 'full_name'
    email: email,
    zip_code: zipCode,                  // ✅ Changed from 'zipCode' to 'zip_code'
    city: city,
    state: state,
    address: address,                   // Property address
    
    // Property details - corrected field names
    beds: parseInt(beds) || 0,
    bedrooms: parseInt(bedrooms) || 0,
    full_bathrooms: parseInt(fullBathrooms) || 0,  // ✅ Changed to 'full_bathrooms'
    half_bathrooms: parseInt(halfBathrooms) || 0,  // ✅ Changed to 'half_bathrooms'
    living_rooms: parseInt(livingRooms) || 0,      // ✅ Changed to 'living_rooms'
    kitchens: parseInt(kitchens) || 0,
    
    // Areas
    carpet_area: carpetArea,            // ✅ Changed to 'carpet_area'
    hard_floors_area: hardFloorsArea,   // ✅ Changed to 'hard_floors_area'
    
    // Additional features
    exterior_features: parseInt(exteriorFeatures) || 0,  // ✅ Changed to 'exterior_features'
    extra_spaces: parseInt(extraSpaces) || 0,            // ✅ Changed to 'extra_spaces'
    pets_allowed: petsAllowed,          // ✅ Changed to 'pets_allowed'
  };

  try {
    // Then update your fetch call:
    const response = await fetch(`${API_URL}/api/quote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    setQuote(result);  // ✅ Store the full result object, not just result.quote
    setIsSubmitted(true);

    // Scroll to top of quote section when quote is generated
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    console.log('Quote result:', result);
  } catch (error) {
    console.error('Error:', error);
    if (error instanceof Error) {
      setError(`Failed to get quote: ${error.message}`);
    } else {
      setError('Failed to get quote: An unknown error occurred.');
    }
  } finally {
    setIsLoading(false);
  }
};

  const resetForm = () => {
    setIsSubmitted(false);
    setQuote(null);
    setError('');
  };

// Success view after quote is generated - Updated to focus on value propositions
if (isSubmitted && quote) {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="container">
        <div className="relative mt-12 max-w-[600px] mx-auto rounded-2xl overflow-hidden
          border-4 border-[#5DCCB7] animate-borderColorSweep
          bg-[#F9FAFB] px-8 py-12 shadow-xl text-center">
          
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0D4D62] text-transparent bg-clip-text mb-4">
              Your Cleaning Quote is Ready!
            </h3>
            
            {/* Large Quote Price Display */}
            <div className="bg-gradient-to-r from-[#5DCCB7] to-[#0D4D62] rounded-2xl p-8 mb-6 text-white">
              <div className="text-5xl font-bold mb-2">
                ${quote.quote}
              </div>
              <div className="text-lg opacity-90">
                Professional cleaning for your property
              </div>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="text-left space-y-4 mb-8">
            <h4 className="text-xl font-bold text-center text-[#0D4D62] mb-6">Why Choose Clean Key?</h4>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#5DCCB7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Vetted &amp; Insured Cleaners</div>
                <div className="text-sm text-gray-600">All our cleaners are background-checked and fully insured for your peace of mind</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#5DCCB7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Quality Guarantee</div>
                <div className="text-sm text-gray-600">Not satisfied? We&apos;ll return within 24 hours to make it right, at no extra cost</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#5DCCB7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Transparent Pricing</div>
                <div className="text-sm text-gray-600">No hidden fees or surprises - the price you see is exactly what you pay</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#5DCCB7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Flexible Scheduling</div>
                <div className="text-sm text-gray-600">Book cleanings that work with your schedule, including same-day availability</div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#5DCCB7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Eco-Friendly Products</div>
                <div className="text-sm text-gray-600">Safe, non-toxic cleaning supplies that protect your family and the environment</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>📧 Quote sent to your email!</strong> We&apos;ve sent your detailed quote to {email}. 
              Ready to book? Reply to the email or contact us directly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={resetForm}
              className="flex-1 bg-white border-2 border-[#0D4D62] text-[#0D4D62] font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:bg-[#0D4D62] hover:text-white transform hover:scale-105"
            >
              Get Another Quote
            </button>
            <button 
              onClick={() => window.open('https://calendly.com/cleankey-business/30min', '_blank', 'noopener,noreferrer')}
              className="flex-1 bg-[#0D4D62] border-2 border-[#0D4D62] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:bg-[#0A3A4A] hover:border-[#0A3A4A] transform hover:scale-105"
            >
              Talk With The Team
            </button>
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
}

  return (
    <section id="quote-section" className="relative bg-white py-20 overflow-hidden scroll-mt-[70px]">
      <div className="container">
        <div className="md:pl-8">
          <h2 className="section-title pt-8">Estimate Your Cleaning Cost</h2>
          <p className="section-description mt-5">
            We estimate your cleaning fee based off of the property information you provide, helping both hosts and cleaners set fair, realistic prices based on the actual work involved.
          </p>
        </div>

        {/* Quote Form */}
        <form onSubmit={handleSubmit}>
          <div className="relative mt-12 max-w-[600px] mx-auto rounded-2xl overflow-hidden
            border-4 border-[#5DCCB7] animate-borderColorSweep
            bg-[#F9FAFB] px-8 py-12 shadow-xl">
            
            <h3 className="text-2xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0D4D62] text-transparent bg-clip-text mb-2">
              Property Details
            </h3>
            <p className="text-[#0D4D62] mb-8">Fill out your property details to get a custom cleaning quote</p>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Property Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Beds */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Beds <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={beds}
                  onChange={(e) => handleNumericChange(e.target.value, setBeds)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={bedrooms}
                  onChange={(e) => handleNumericChange(e.target.value, setBedrooms)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Half Bathrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Half Bathrooms <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={halfBathrooms}
                  onChange={(e) => handleNumericChange(e.target.value, setHalfBathrooms)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Full Bathrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Bathrooms <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={fullBathrooms}
                  onChange={(e) => handleNumericChange(e.target.value, setFullBathrooms)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Living Rooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Living Rooms <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={livingRooms}
                  onChange={(e) => handleNumericChange(e.target.value, setLivingRooms)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Kitchens */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kitchens <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={kitchens}
                  onChange={(e) => handleNumericChange(e.target.value, setKitchens)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Exterior Features */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exterior Features <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={exteriorFeatures}
                  onChange={(e) => handleNumericChange(e.target.value, setExteriorFeatures)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Extra Spaces */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Extra Spaces <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={extraSpaces}
                  onChange={(e) => handleNumericChange(e.target.value, setExtraSpaces)}
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            {/* Area Sliders with Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Carpet Area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Carpet Area (sq ft) <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={carpetArea === 0 ? '' : carpetArea}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '' || (!isNaN(Number(value)) && parseInt(value) >= 0 && parseInt(value) <= 5000)) {
                        setCarpetArea(parseInt(value) || 0);
                      }
                    }}
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                    disabled={isLoading}
                  />
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={carpetArea}
                    onChange={(e) => setCarpetArea(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-pink"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Hard Floors Area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hard Floors Area (sq ft) <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={hardFloorsArea === 0 ? '' : hardFloorsArea}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '' || (!isNaN(Number(value)) && parseInt(value) >= 0 && parseInt(value) <= 5000)) {
                        setHardFloorsArea(parseInt(value) || 0);
                      }
                    }}
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                    disabled={isLoading}
                  />
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={hardFloorsArea}
                    onChange={(e) => setHardFloorsArea(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-pink"
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            {/* Pets Allowed */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Are pets allowed? <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="pets"
                    value="yes"
                    checked={petsAllowed === true}
                    onChange={() => setPetsAllowed(true)}
                    className="w-4 h-4 text-[#5DCCB7] border-gray-300 focus:ring-[#5DCCB7]"
                    disabled={isLoading}
                  />
                  <span className="text-sm font-medium text-gray-700">Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="pets"
                    value="no"
                    checked={petsAllowed === false}
                    onChange={() => setPetsAllowed(false)}
                    className="w-4 h-4 text-[#5DCCB7] border-gray-300 focus:ring-[#5DCCB7]"
                    disabled={isLoading}
                  />
                  <span className="text-sm font-medium text-gray-700">No</span>
                </label>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h4>
              
              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter property address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* City, State, Zip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="State"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="Zip"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DCCB7] focus:border-transparent"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Get Quote Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#0D4D62] hover:bg-[#0A3A4A] hover:shadow-lg hover:scale-105'
              } text-white`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Getting Quote...</span>
                </div>
              ) : (
                'Get Quote'
              )}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              We&apos;ll email your personalized cleaning quote
            </p>
          </div>
        </form>
      </div>

      <style jsx>{`
        .slider-pink::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #5DCCB7;
          border-radius: 50%;
          cursor: pointer;
        }

        .slider-pink::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #5DCCB7;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }

        .slider-pink::-webkit-slider-track {
          background: linear-gradient(to right, #5DCCB7 0%, #5DCCB7 var(--value, 0%), #E5E7EB var(--value, 0%), #E5E7EB 100%);
          height: 8px;
          border-radius: 4px;
        }

        .slider-pink::-moz-range-track {
          background: linear-gradient(to right, #5DCCB7 0%, #5DCCB7 var(--value, 0%), #E5E7EB var(--value, 0%), #E5E7EB 100%);
          height: 8px;
          border-radius: 4px;
        }

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