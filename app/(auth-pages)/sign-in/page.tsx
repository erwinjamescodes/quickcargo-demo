import { type Message } from "@/components/form-message";
import Image from "next/image";
import HeroImage from "../../_assets/trucks.webp";
import { SignInForm } from "./components/SignInForm";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <div className="overscroll-none flex h-screen w-full ">
      <div className="w-1/2 h-full p-8 pr-0">
        <div className="max-h-full overflow-hidden rounded-2xl ">
          <Image
            src={HeroImage}
            alt="Aerial view"
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <SignInForm message={searchParams} />
      </div>
    </div>
  );
}
