import { FeedSortTabs } from "@/components/feed/feed-sort-tabs";
import { PostCard } from "@/components/feed/post-card";
import { RightTrending } from "@/components/layout/right-trending";
import { auth, getSessionUser } from "@/lib/auth";
import {
  batchAuthorsForIds,
  listPostsSorted,
  listTags,
} from "@/lib/db/queries";
import { getTrendingToday } from "@/lib/trending";
import { FeedSort, Tag } from "@/lib/types";
import Image from "next/image";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise <{ sort?: string; tag?: string }>;
}) {
  const sp = await searchParams;
  const sortRaw = sp.sort; 
  const sort: FeedSort = sortRaw === "new" || sortRaw === "top" ? sortRaw: "hot";

  const tagFilter = sp.tag?.toLocaleLowerCase();

  const sessionUser = await getSessionUser();
  
}