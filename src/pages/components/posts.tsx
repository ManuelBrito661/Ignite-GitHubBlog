
export function Posts(){
  return(
    <div className="w-[54rem] mt-[72px]">

      <div className="flex justify-between">
        <h2 className="text-base-subtitle">Publicações</h2>
        <span className="text-base-span">6 publicações</span>
      </div>

      <div className="mt-3">
        <input type="text" className="w-full rounded-md outline-none focus-within:outline-blue bg-base-input text-base-label px-4 py-3 focus-within:text-base-text" placeholder="Buscar conteúdo" />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-8">
        <a href="#" className="hover:border-base-label">
          <div className="w-[416px] h-[260px] bg-base-post p-8 rounded-md hover:border-base-text">
            <div className="flex justify-between">
              <h1 className="text-base-title max-w-[283px] font-bold">JavaScript data types and data structures</h1>
              <span className="text-base-span text-xs">Há 1 dia</span>
            </div>

            <p className="pt-5 overflow-hidden max-h-[129px] text-ellipsis">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iusto, eos autem repudiandae totam facere facilis reiciendis a architecto recusandae eius minus quo! Eveniet commodi sit aspernatur fuga amet molestiae id quae accusamus omnis? Iusto vitae, quas molestias eveniet necessitatibus minima facere ratione non suscipit tenetur, vero ut nam sapiente molestiae vel temporibus quaerat quia.</p>
          </div>
        </a>

      </div>
    </div>
  )
}