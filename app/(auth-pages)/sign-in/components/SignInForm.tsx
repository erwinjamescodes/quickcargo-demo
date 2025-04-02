"use client";

import { signInAction } from "@/app/actions";
import { FormMessage, type Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { TextInput, PasswordInput } from "@mantine/core";
interface SignInFormProps {
  message: Message;
}

export function SignInForm({ message }: SignInFormProps) {
  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          <span className="text-primary">Quick</span>
          <span>demo</span>
        </h1>
      </div>

      {/* Login heading */}
      <h2 className="text-xl font-medium mb-1">Login to QuickDemo</h2>
      <p className="text-gray-400 mb-6">
        Join QuickDemo and start shipping today
      </p>

      {/* Form */}
      <form className="flex flex-col gap-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="email" className="text-sm">
              Enter Email
            </label>
          </div>
          <TextInput
            id="email"
            name="email"
            placeholder="For e.g. dory@mail.com"
            size="md"
            radius="md"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="password" className="text-sm">
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
          />
        </div>

        <SubmitButton
          pendingText="Signing In..."
          formAction={signInAction}
          className="w-full py-3 rounded-md flex items-center justify-center gap-2 bg-gray-300 text-black hover:bg-primary hover:text-white"
        >
          Sign in
        </SubmitButton>

        <FormMessage message={message} />
      </form>
    </div>
  );
}
