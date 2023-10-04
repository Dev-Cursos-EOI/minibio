import Image from "next/image";

export default function Head() {
    return (
        <>
            <Image
                className="shadow-2xl rounded-full object-cover w-[140px] h-[140px]"
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3QnXLad8Rbe7Uiu9JGMYOIwbx_llu5TLiODONc5b&s"}
                alt="Yo"
                width={240}
                height={240}
            />
            <h1 className="font-bold text-xl my-4">Andrey Marin</h1>
        </>
    );
}

