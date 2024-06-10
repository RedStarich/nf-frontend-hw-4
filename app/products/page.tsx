/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fmzOHpMmdH5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  
  const products = [
    {
      id: 1,
      image: "/placeholder.svg",
      title: "Bamboo Cutting Board",
      price: 19.99,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Reusable Tote Bag",
      price: 12.99,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Organic Cotton T-Shirt",
      price: 24.99,
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "Stainless Steel Water Bottle",
      price: 16.99,
    },
    {
      id: 5,
      image: "/placeholder.svg",
      title: "Bamboo Utensil Set",
      price: 9.99,
    },
    {
      id: 6,
      image: "/placeholder.svg",
      title: "Recycled Glass Vase",
      price: 14.99,
    },
  ]
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#f0f0f0] dark:bg-[#1a1a1a]">
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-[#262626] rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                alt={product.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1a1a1a] dark:text-white">{product.title}</h3>
                <p className="text-[#4a4a4a] dark:text-[#b3b3b3] font-medium">${product.price}</p>
                <a
                  href="#"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-full mt-4"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}