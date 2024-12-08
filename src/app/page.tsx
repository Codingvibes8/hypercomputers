
import Link from "next/link";
export default function Home() {
  return (
    <div className={'bg-black bg-home-img bg-cover bg-center h-screen'}>
      <main className={'flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh'}>
        <div className={'flex flex-col gap-6 p-12 rounded-xl bg-red-900 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl'}>
          <h1 className={'text-4xl font-bold'}>Hyper Electronics<br />Repair Shop</h1>
          <address>
            876,Broadway Avenue,<br />
            Kilburn,NW6 8YU<br />
            London
          </address>
          <p>Open Daily: 9am to 7pm</p>
          <Link href={'tel:0203564987'} className="hover:underline">
            0203-564987
          </Link>
        </div>
      </main>
    </div>

  );
}