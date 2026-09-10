import { SubmitPostForm } from "@/components/post/submit-post-form";
import { getSessionUser } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SubmitPage() {
  const sessionUser = await getSessionUser();
  if (!sessionUser) {
    redirect("/auth/sign-in");
  }
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-primary" />
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Create a post
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
          Share something interesting, ask a question, or start a conversation.
          You're posting as{" "}
          <span className="font-semibold text-foreground">
            u/{sessionUser.username}
          </span>
          .
        </p>
        <Link href="/" className="mt-4 inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          Cancel
        </Link>
      </div>
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-7">
        <SubmitPostForm />
      </div>
    </div>
  );
}
