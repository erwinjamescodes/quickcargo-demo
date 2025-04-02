import { createClient } from "@/utils/supabase/server";
import { InfoIcon, Truck } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import TruckImage from "../_assets/truck.webp";
import { signOutAction } from "../actions";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col min-h-screen bg-black text-white px-24">
      {/* Header with logo and login */}
      <header className="w-full px-8 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-primary">Quick</span>demo
          </span>
        </div>
        <button
          onClick={signOutAction}
          className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full"
        >
          Logout
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex px-8 py-12">
        <div className="flex flex-col md:flex-row w-full gap-8">
          {/* Left column with text and form */}
          <div className="flex-1 flex flex-col justify-start pt-24">
            <h1 className="text-6xl font-bold mb-6">
              Hi, {user.user_metadata.display_name}!
            </h1>
            <p className="text-lg mb-8">Nice to meet you!</p>
          </div>

          {/* Right column with image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full md:h-full overflow-hidden h-[535px]">
              <Image
                src={TruckImage}
                alt="Aerial view"
                priority
                className="object-cover w-full rounded-xl "
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
