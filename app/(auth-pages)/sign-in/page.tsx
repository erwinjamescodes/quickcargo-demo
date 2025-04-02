import Image from "next/image";
import HeroImage from "../../_assets/trucks.webp";
import { SignInForm } from "./components/SignInForm";
import { Suspense } from "react";

export default async function Login() {
  return (
    <div className="overscroll-none flex flex-col md:flex-row h-screen w-full">
      <div className="hidden md:block md:w-1/2 h-1/3 md:h-full p-4 md:p-8 md:pr-0">
        <div className="max-h-full overflow-hidden rounded-2xl">
          <Image
            src={HeroImage}
            alt="Aerial view"
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex-1 flex pt-48 md:pt-0 md:items-center justify-center py-6 px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <SignInForm />
        </Suspense>
      </div>
    </div>
  );
}
