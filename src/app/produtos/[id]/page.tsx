type PageParams = {
    params: {
        id: string
    }
}

interface Product {
    id: number
    nome: string
    preco: number
    descricao: string
    estoque: number
    importado: number
}

export default async function ProductPage({params}: PageParams) {
    const response = await fetch(`https://api.origamid.online/produtos/${params.id}`)
    const data = await response.json() as Product
    const {id, nome, preco, descricao, estoque, importado} = data

  return (
    <div>
      Produto <div>
        <h1>{nome}</h1>
        <div style={{display: 'flex', alignItems:'center', gap: 2}}>
         <span> R$ </span>
         <h2>{preco}</h2>
        </div>
        <p>{descricao}</p>
      </div>
    </div>
  )
}
