import Link from "next/link";

export default function Buttons({ info }) {
    return (
        <>
            <Link className="mt-2 hover:bg-slate-100 hover:shadow transition-all p-3 w-full max-w-[400px] 
            text-center rounded-xl mx-auto bg-white shadow-md"
                href={info.link}>{info.text}</Link>
        </>
    );
}
