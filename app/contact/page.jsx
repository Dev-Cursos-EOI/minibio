import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Contact() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <Navigation />

            <p className="p-4 container max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur ea iure, vel fugiat soluta esse rem neque nam sit ratione natus temporibus nemo sunt? Saepe iusto dolor necessitatibus dicta.</p>
            <button className="rounded hover:bg-slate-800 p-4 container max-w-[600px] bg-black text-white">Contactame</button>
            <Footer />
        </main>
    );
}
