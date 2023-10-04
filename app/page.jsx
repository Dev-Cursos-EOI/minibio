import Buttons from '@/components/Buttons'
import Footer from '@/components/Footer'
import Head from '@/components/Head'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function Home() {
  const misLinks = [
    {
      link: "https://google.com",
      text: "Mi web favorita"
    },
    {
      link: "https://microsoft.com",
      text: "La que menos visito"
    },
    {
      link: "https://fb.com",
      text: "Esto no se usa"
    },
    {
      link: "https://fb.com",
      text: "Esto no se usa"
    },
    {
      link: "https://fb.com",
      text: "Esto no se usa"
    }
  ]

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Navigation />
      <Head />

      {misLinks.map((link, index) => <Buttons key={index} info={link} />)}

      <Footer />
    </main>
  )
}
