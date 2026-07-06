import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center pt-24 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/Images/Background1.jpg')", // ✅ FIXED
      }}
    >
      {/* DARK OVERLAY (IMPROVED) */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* CARD */}
      <div className="relative bg-black/70 backdrop-blur-lg border border-[#D97745]/30 rounded-2xl p-8 w-full max-w-2xl text-white shadow-xl">

        <h1 className="text-3xl font-serif text-center mb-6">
          Delivery Details
        </h1>

        {/* FORM */}
        <div className="space-y-4">

          {/* NAME */}
          <div>
            <label className="text-gray-300">Full Name</label>
            <input
              placeholder="John Doe"
              className="w-full mt-1 p-3 rounded-lg bg-black/80 border border-gray-700 focus:border-[#D97745] outline-none"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-gray-300">Email</label>
            <input
              placeholder="john@example.com"
              className="w-full mt-1 p-3 rounded-lg bg-black/80 border border-gray-700 focus:border-[#D97745] outline-none"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="text-gray-300">Phone Number</label>
            <input
              placeholder="+91 98765 43210"
              className="w-full mt-1 p-3 rounded-lg bg-black/80 border border-gray-700 focus:border-[#D97745] outline-none"
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="text-gray-300">Delivery Address</label>
            <textarea
              placeholder="123 Baker Street..."
              className="w-full mt-1 p-3 rounded-lg bg-black/80 border border-gray-700 focus:border-[#D97745] outline-none resize-none h-28"
            />
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-6">

          {/* SAVE */}
          <button className="flex-1 border border-[#D97745] text-[#D97745] py-2 rounded-full hover:bg-[#D97745] hover:text-white transition">
            Save Details
          </button>

          {/* PROCEED */}
          <button
            onClick={() => navigate("/cart")}
            className="flex-1 bg-[#D97745] text-white py-2 rounded-full font-semibold hover:bg-[#c4683c] transition shadow-[0_0_20px_rgba(217,119,69,0.4)]"
          >
            Proceed to Order
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;