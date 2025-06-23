import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown, LuWallet, LuTarget } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 auth-left-section">
        <div className="floating-shapes"></div>
        <div className="max-w-lg mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <LuWallet className="text-white text-xl" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Expense Tracker
            </h2>
          </div>
          
          {/* Add some decorative elements */}
          <div className="absolute top-20 right-8 w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-40 left-4 w-8 h-8 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg opacity-30 rotate-45"></div>
          <div className="absolute bottom-32 right-12 w-12 h-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full opacity-50"></div>
          
          {children}
        </div>
      </div>

      <div 
        className="hidden md:block w-[40vw] h-screen relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(147, 197, 253, 0.85), rgba(59, 130, 246, 0.75)), url('https://imageio.forbes.com/specials-images/imageserve/67874a28f017c80ed324338f/White-card-with-the-text-Keep-track-of-your-expenses-on-wooden-desk-background-/960x0.jpg?format=jpg&width=960')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-32 h-32 rounded-full bg-white/20 absolute top-16 left-6 animate-pulse"></div>
          <div className="w-20 h-20 rounded-2xl bg-blue-200/30 absolute top-32 right-8 rotate-12"></div>
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-300/20 absolute bottom-24 left-2"></div>
          <div className="w-24 h-24 rounded-xl bg-white/15 absolute bottom-1/3 right-12 -rotate-12"></div>
        </div>

        {/* Content container */}
        <div className="relative z-20 p-8 h-full flex flex-col justify-between">
          {/* Top section with stats cards */}
          <div className="space-y-6 pt-4">
            <StatsInfoCard
              icon={<LuTrendingUpDown />}
              label="Monthly Income"
              value="15,430"
              color="bg-gradient-to-r from-emerald-400 to-emerald-500"
              textColor="text-emerald-700"
            />
            <StatsInfoCard
              icon={<LuTarget />}
              label="Savings Goal"
              value="8,250"
              color="bg-gradient-to-r from-blue-400 to-blue-500"
              textColor="text-blue-700"
            />
          </div>

          {/* Center motivational text */}
          <div className="text-center text-white py-6">
            <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">
              Smart Financial Management
            </h3>
            <p className="text-lg opacity-95 leading-relaxed max-w-sm mx-auto">
              Take control of your money with intelligent expense tracking and budgeting tools.
            </p>
          </div>

          {/* Bottom card showcase */}
          <div className="flex justify-center pb-4">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-300/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src={CARD_2}
                className="relative w-72 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt="Credit Card"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

const StatsInfoCard = ({ icon, label, value, color, textColor }) => {
  return (
    <div className="flex gap-5 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-105 transition-all duration-300">
      <div className={`w-16 h-16 flex items-center justify-center text-2xl text-white ${color} rounded-2xl shadow-lg`}>
        {icon}
      </div>
      <div className="flex-1">
        <h6 className="text-sm text-gray-600 mb-2 font-semibold uppercase tracking-wide">{label}</h6>
        <span className={`text-3xl font-bold ${textColor || 'text-gray-800'}`}>${value}</span>
      </div>
    </div>
  );
};

export default AuthLayout;