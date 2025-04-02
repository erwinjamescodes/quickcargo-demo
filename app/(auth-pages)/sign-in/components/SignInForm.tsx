"use client";

import { signInAction } from "@/app/actions";
import { FormMessage, type Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { TextInput, PasswordInput } from "@mantine/core";

interface SignInFormProps {
  errorMessage: string | null;
}

export function SignInForm({ errorMessage }: SignInFormProps) {
  return (
    <div className="w-full max-w-md px-4 sm:px-0 mx-auto">
      {/* Logo */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          <span className="text-primary">Quick</span>
          <span>demo</span>
        </h1>
      </div>

      {/* Login heading */}
      <h2 className="text-lg sm:text-xl font-medium mb-1">
        Login to QuickDemo
      </h2>
      <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
        Join QuickDemo and start shipping today
      </p>

      {/* Form */}
      <form className="flex flex-col gap-4 sm:gap-6">
        <div>
          <div className="flex justify-between items-center mb-1 sm:mb-2">
            <label htmlFor="email" className="text-xs sm:text-sm">
              Enter Email
            </label>
          </div>
          <TextInput
            id="email"
            name="email"
            placeholder="For e.g. dory@mail.com"
            size="md"
            radius="md"
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1 sm:mb-2">
            <label htmlFor="password" className="text-xs sm:text-sm">
              Password
            </label>
          </div>
          <PasswordInput
            id="password"
            name="password"
            placeholder="Your password"
            required
            size="md"
            radius="md"
            className="w-full"
          />
        </div>

        <SubmitButton
          pendingText="Signing In..."
          formAction={signInAction}
          className="w-full py-2 sm:py-3 rounded-md flex items-center justify-center gap-2 bg-gray-300 text-black hover:bg-primary hover:text-white text-sm sm:text-base mt-2"
        >
          Sign in
        </SubmitButton>
        <p className="text-sm text-red-500 text-center">{errorMessage}</p>
      </form>
    </div>
  );
}
