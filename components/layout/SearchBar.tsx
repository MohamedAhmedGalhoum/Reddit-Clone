"use client"

import {Search} from "lucide-react"
import {Input} from "../ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function SearchBar() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const value = searchQuery.trim();
        if (value) {
            router.push(`/?search=${encodeURIComponent(value)}`);
        } else {
            router.push("/");
        }
    }
    return (
        <form onSubmit={handleSearch} className="relative mx-auto hidden max-w-xl flex-1 md:block">
            <div className="relative">
                <Search className="absolute left-135 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                    placeholder="Search posts..."
                    className="bg-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-orange-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search posts"
                />
            </div>
        </form>
    )
}