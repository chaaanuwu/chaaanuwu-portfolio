import { Bell } from "lucide-react";

type AdminDashboardProps = {
    session: { username: string } | null;
};

export default function AdminDashboard({ session }: AdminDashboardProps) {
    return (
        <main className="flex-1 p-8 bg-[var(--color-background)]">
          <header className="flex items-center justify-between mb-8">
            <div className="mb-8">
            <h2 className="text-white text-3xl font-bold">Dashboard</h2>
            <p className="text-gray-400">Welcome back, here's a summary of your portfolio.</p>
          </div>
            <div className="flex items-center gap-4">
              <button className="relative flex cursor-pointer items-center justify-center rounded-full h-10 w-10 bg-[#121826] text-gray-400 hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined"><Bell /></span>
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-500"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmcVRPkNKy6qJ0-vfm-jcoO8-c3pcD4qku5CUjpzXt4OCKPocfcwBNdjy7KGB_IL7ju6NIfB1xP0Wv5biiB5n9m_WiXSZOwgVqWdImF43ncrxPqZT4SCjErP1WZwIe_itzmmq_DSzQWPy5mlZwWY5LMS6xHdgmkYMG49VmC-eTESvFbeNvrHrno1jbn8KZO_isZuJoYK8Z06ZEtG2Ch-E0cjkAWF7V3FQbZ5dtDGt2lyQ5EoLQLCi0UoU8LGmPpgQxsAje0ZP-nNY")' }}></div>
                <div>
                  <p className="text-white font-semibold text-sm">John Doe</p>
                  <p className="text-gray-400 text-xs">Admin</p>
                </div>
              </div>
            </div>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#121826] rounded-xl p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_8px_12px_rgba(107,70,193,0.2),0px_20px_30px_rgba(107,70,193,0.2)]">
              <p className="text-gray-400 text-sm font-medium">Total Projects</p>
              <p className="text-white text-3xl font-bold my-2">25</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-green-500 text-base">trending_up</span>
                <p className="text-green-500 text-sm font-medium">+10%</p>
              </div>
            </div>
            <div className="bg-[#121826] rounded-xl p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_8px_12px_rgba(107,70,193,0.2),0px_20px_30px_rgba(107,70,193,0.2)]">
              <p className="text-gray-400 text-sm font-medium">Certificates Uploaded</p>
              <p className="text-white text-3xl font-bold my-2">12</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-green-500 text-base">trending_up</span>
                <p className="text-green-500 text-sm font-medium">+5%</p>
              </div>
            </div>
            <div className="bg-[#121826] rounded-xl p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_8px_12px_rgba(107,70,193,0.2),0px_20px_30px_rgba(107,70,193,0.2)]">
              <p className="text-gray-400 text-sm font-medium">Blog Posts</p>
              <p className="text-white text-3xl font-bold my-2">8</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-green-500 text-base">trending_up</span>
                <p className="text-green-500 text-sm font-medium">+2%</p>
              </div>
            </div>
            <div className="bg-[#121826] rounded-xl p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_8px_12px_rgba(107,70,193,0.2),0px_20px_30px_rgba(107,70,193,0.2)]">
              <p className="text-gray-400 text-sm font-medium">Visitors</p>
              <p className="text-white text-3xl font-bold my-2">1,500</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-green-500 text-base">trending_up</span>
                <p className="text-green-500 text-sm font-medium">+15%</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 bg-[#121826] rounded-xl p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)]">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-white text-lg font-semibold">Visitors Over Time</p>
                  <p className="text-gray-400 text-sm">Last 30 Days</p>
                </div>
                <div className="flex items-center gap-1 text-green-500">
                  <span className="material-symbols-outlined text-base">trending_up</span>
                  <p className="font-medium text-sm">+15%</p>
                </div>
              </div>
              <div className="h-64">
                <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 500 200" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 159.5C27.7778 159.5 27.7778 57.5 55.5556 57.5C83.3333 57.5 83.3333 87.5 111.111 87.5C138.889 87.5 138.889 157.5 166.667 157.5C194.444 157.5 194.444 71.5 222.222 71.5C250 71.5 250 91.5 277.778 91.5C305.556 91.5 305.556 181.5 333.333 181.5C361.111 181.5 361.111 200 388.889 200C416.667 200 416.667 19.5 444.444 19.5C472.222 19.5 472.222 139.5 500 139.5" stroke="url(#lineGradient)" strokeLinecap="round" strokeWidth="3"></path>
                  <path d="M0 159.5C27.7778 159.5 27.7778 57.5 55.5556 57.5C83.3333 57.5 83.3333 87.5 111.111 87.5C138.889 87.5 138.889 157.5 166.667 157.5C194.444 157.5 194.444 71.5 222.222 71.5C250 71.5 250 91.5 277.778 91.5C305.556 91.5 305.556 181.5 333.333 181.5C361.111 181.5 361.111 200 388.889 200C416.667 200 416.667 19.5 444.444 19.5C472.222 19.5 472.222 139.5 500 139.5V200H0V159.5Z" fill="url(#areaGradient)"></path>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="lineGradient" x1="0" x2="500" y1="109.75" y2="109.75">
                      <stop stopColor="var(--purple-accent)"></stop>
                      <stop offset="1" stopColor="var(--blue-accent)"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="areaGradient" x1="250" x2="250" y1="19.5" y2="200">
                      <stop stopColor="var(--purple-accent)" stopOpacity="0.3"></stop>
                      <stop offset="1" stopColor="var(--blue-accent)" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="bg-[#121826] rounded-xl p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)]">
              <p className="text-white text-lg font-semibold mb-4">Project Contributions</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <p className="text-gray-400 w-24 text-sm">Project A</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-400 w-24 text-sm">Project B</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-400 w-24 text-sm">Project C</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-400 w-24 text-sm">Project D</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-400 w-24 text-sm">Project E</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
}