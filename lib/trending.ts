export type TrendingItem = {
    [x: string]: any;rank: number; title: string; postCount: string
};
export function getTrendingToday(): TrendingItem[] {
    return [
        {rank: 1, title: "OpenAI announces GPT5", postCount: "12.4K"},
        {rank: 2, title: "Next.js 16 app patterns", postCount: "8.2K"},
        {rank: 3, title: "Why tags beat communities", postCount: "5.1k"},
        {rank: 4, title: "Shipping side projects", postCount: "3.4k"},
        {rank: 5, title: "Server actions in production", postCount: "2.9k"}
    ];
}