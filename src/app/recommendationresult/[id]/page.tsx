export default function RecommendationView({ params }: { params: { id: string } }) {
    const RDID = params.id
    return (
        <main className="flex h-full w-full flex-col items-center justify-between p-24">
            <p>This is Recommendation View of {RDID}</p>
        </main>
    )
}