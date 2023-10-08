import Link from 'next/link'
export default function TypeList() {
    return (
        <main className="flex h-full w-full flex-col items-center justify-between p-24">
            <p>This is Dormitory Life Type List page</p>
            <Link href="/type/1">type 1</Link>
            <Link href="/type/2">type 2</Link>
        
        </main>
    )
}