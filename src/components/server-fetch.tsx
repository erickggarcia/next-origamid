interface FetchData {
    id: number
    nome: string
    preco: number
    descricao: string
    estoque: number
    importado: number
}

export default async function ServerFetch() {
    const response = await fetch('https://api.origamid.online/produtos')
    const data = await response.json() as FetchData []
  return (
    <ul>
        {data.map((produto) => (
                <li key={produto.id}>{produto.nome}</li>
        ))}
    </ul>
  )
}
