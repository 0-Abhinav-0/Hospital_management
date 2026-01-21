"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Check } from "lucide-react";

type Props = {
  onMobileClick?: () => void;
};

export default function InteractiveSignInButton({
  onMobileClick,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignIn = () => {
    // 👇 CLOSE MENU IMMEDIATELY
    onMobileClick?.();

    if (isPending || isSuccess) return;

    startTransition(async () => {
      // Simulate auth request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
    });
  };

  return (
    <Button
      variant="secondary"
      size="lg"
      onClick={handleSignIn}
      disabled={isPending || isSuccess}
      
      
    >
      {isPending && (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Signing in...
        </>
      )}

      {!isPending && isSuccess && (
        <>
          <Check className="h-4 w-4" />
          Signed in
        </>
      )}

      {!isPending && !isSuccess && "Sign In"}
    </Button>
  );
}
