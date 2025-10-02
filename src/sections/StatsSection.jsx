import { Building2, Globe, TrendingUp, Award, Star } from "lucide-react";

function StatsSection() {
  return (
    <section className="relative z-10 bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Top Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg relative">
          <Star className="w-8 h-8 text-black" />
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-30 animate-pulse"></div>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-4xl font-semibold text-center mb-4 text-gray-800">
        Trusted by Industry Leaders
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We've had the privilege of partnering with some of the world's most
        innovative companies, delivering transformative solutions that drive
        real business impact.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Building2 className="w-8 h-8 mx-auto mb-4 text-black" />
          <h3 className="text-2xl text-black font-bold">47+</h3>
          <p className="text-gray-500">Fortune 500 Clients</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Globe className="w-8 h-8 mx-auto mb-4 text-black" />
          <h3 className="text-2xl font-bold text-black">23</h3>
          <p className="text-gray-500">Countries Served</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <TrendingUp className="w-8 h-8 mx-auto mb-4 text-black" />
          <h3 className="text-2xl font-bold text-black">340%</h3>
          <p className="text-gray-500">Average ROI Increase</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Award className="w-8 h-8 mx-auto mb-4 text-black" />
          <h3 className="text-2xl font-bold text-black">28</h3>
          <p className="text-gray-500">Industry Awards</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
