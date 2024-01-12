export default function ContentGoogle(params) {
  return(
    <section className={`google-content ${params.data}`}>
      {params.children}
    </section>
  )
}