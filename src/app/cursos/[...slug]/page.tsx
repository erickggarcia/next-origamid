type PageParams = {
    params: {
        slug: string []
    }
}

export default async function ProductPage({params}: PageParams) {
    
  return (
    <main>
        <h1>cursos</h1>
        <ul>
          {params.slug.map((curso) => (
            <li key={curso}>{curso}</li>
          ))}
        </ul>
    </main>
  )
}
