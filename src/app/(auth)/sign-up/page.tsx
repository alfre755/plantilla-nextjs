import SignUpForm from "@/modules/login/forms/sign-up-form";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col p-2 gap-4 min-h-screen">
      <div className="flex justify-center">
        <Image
          src="/assets/images/logo_negro.png"
          alt="Logo"
          width={250}
          height={250}
        />
      </div>
      <div className="text-2xl font-bold text-center">
        Ingresa a nuestra plataforma
      </div>
      <div className="mx-auto w-full max-w-md ">
        <SignUpForm />
      </div>
    </div>
  );
}
