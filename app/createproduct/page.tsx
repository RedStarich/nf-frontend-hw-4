const page = () => {
  return (
    <div>
        <div>
            <h1 className="text-3xl py-[45px] md:text-7xl text-center font-bold">Давайте создадим объявление</h1>
        </div>
        <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
            <input type="text" placeholder="Название объявления" className="w-full border rounded-lg px-3 py-2 mb-4" />
            <input type="text" placeholder="Цена" className="w-full border rounded-lg px-3 py-2 mb-4" />
            <textarea placeholder="Описание" className="w-full border rounded-lg px-3 py-2 mb-4"></textarea>
            <input type="file" className="w-full border rounded-lg px-3 py-2 mb-4" />
            <button className="w-full bg-green-500 text-white font-bold py-2 rounded-lg">Создать объявление</button>
        </div>
    </div>
  )
}

export default page