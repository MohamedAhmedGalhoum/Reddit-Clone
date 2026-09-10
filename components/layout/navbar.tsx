import { Bell } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@neondatabase/auth/react";
import { SearchBar } from "@/components/layout/SearchBar";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground" aria-hidden>
            R
          </span>
          <span className="text-lg">Reddit</span>
        </Link>
        <SearchBar />
        <SignedIn>
          <Link href="/submit" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:inline-flex",)}>
            Create
          </Link>
          <Button variant="ghost" size="icon" className="text-muted-foreground" aria-label="Notifications">
            <Bell className="size-5" />
          </Button>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="ml-auto flex items-center gap-2">
            <Link href="/auth/sign-in" className={cn(buttonVariants({ variant: "ghost", size: "default" }))}>
              Log In
            </Link>
            <Link href="/auth/sign-up" className={cn(buttonVariants({ variant: "default" }))}>
              Sign Up
            </Link>
          </div>
        </SignedOut>
      </div>
    </header>
  );
}