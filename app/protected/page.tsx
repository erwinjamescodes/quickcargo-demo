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
    <div className="flex-1 w-full flex flex-col min-h-screen bg-black text-white px-4 sm:px-8 md:px-8 lg:px-32">
      {/* Header with logo and login */}
      <header className="w-full py-4 sm:py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl font-bold">
            <span className="text-primary">Quick</span>demo
          </span>
        </div>
        <form action={signOutAction}>
          <button
            type="submit"
            className="bg-primary hover:bg-primary/80 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base"
          >
            Logout
          </button>
        </form>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col py-6 sm:py-8 md:py-12">
        <div className="flex flex-col lg:flex-row w-full gap-6 md:gap-8">
          {/* Left column with text */}
          <div className="flex-1 flex flex-col justify-start lg:pt-12 order-2 lg:order-1">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Hi, {user.user_metadata.display_name}!
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Nice to meet you!
            </p>
          </div>

          {/* Right column with image */}
          <div className="flex-1 flex items-center justify-center order-1 lg:order-2">
            <div className="w-full aspect-video sm:aspect-square lg:aspect-auto lg:h-full rounded-lg overflow-hidden">
              <Image
                src={TruckImage}
                alt="Aerial view"
                priority
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
