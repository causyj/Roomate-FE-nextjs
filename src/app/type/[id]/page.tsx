export default function TypeView({ params }: { params: { id: string } }) {
    const TypeID = params.id
    return (
        <main className="flex h-full w-full flex-col items-center justify-between p-24">
            <p>This is Tpye View of {TypeID}</p>
        </main>
    )
}