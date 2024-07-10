import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Sobre',
    description: 'Essa é a página sobre'
}

export default function SobrePage() {
    return (
    <main className="menu">
        <h2>sobre</h2>
    </main>
    )
}