import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function AboutMe() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <Navigation />

            <p className="p-4 container max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur ea iure, vel fugiat soluta esse rem neque nam sit ratione natus temporibus nemo sunt? Saepe iusto dolor necessitatibus dicta.</p>
            <p className="p-4 container max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur ea iure, vel fugiat soluta esse rem neque nam sit ratione natus temporibus nemo sunt? Saepe iusto dolor necessitatibus dicta.</p>
            <p className="p-4 container max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur ea iure, vel fugiat soluta esse rem neque nam sit ratione natus temporibus nemo sunt? Saepe iusto dolor necessitatibus dicta.</p>
            <p className="p-4 container max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur ea iure, vel fugiat soluta esse rem neque nam sit ratione natus temporibus nemo sunt? Saepe iusto dolor necessitatibus dicta.</p>

            <Footer />
        </main>
    );
}
