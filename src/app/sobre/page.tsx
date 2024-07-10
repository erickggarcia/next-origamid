import { Metadata } from "next"

import dynamic from "next/dynamic"

const Width = dynamic(() => import("@/components/width"), {ssr: false})

export const metadata: Metadata = {
    title: 'Sobre',
    description: 'Essa é a página sobre'
}

export default function SobrePage() {
    return (
    <main>
        <h2>sobre</h2>
        <Width/>
        {/* <h2 id="empresa" style={{margin: '1600px 0'}}>A Empresa</h2> */}
    </main>
    )
}