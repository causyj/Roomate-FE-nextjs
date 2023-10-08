import Link from 'next/link'

export default function RecommendationResult() {
    return (
        <main className="flex h-full w-full flex-col items-center justify-between p-24">
            <p>This is Roomate Recommendation page</p>
            <Link href="/recommendationresult/1">recommendationresult 1</Link>
            <Link href="/recommendationresult/2">recommendationresult 2</Link>
        </main>
    )
}