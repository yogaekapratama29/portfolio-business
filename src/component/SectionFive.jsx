import gedung1 from "../assets/gedung1.jpg";
import gedung2 from "../assets/gedung2.jpg";
import gedung3 from "../assets/gedung3.jpg";
import gedung4 from "../assets/gedung14.webp";
import gedung5 from "../assets/gedung5.jpg";
import gedung6 from "../assets/gedung6.jpg";
import gedung7 from "../assets/bg1.jpeg";

import { useState } from "react";

const SectionFive = () => {
    const [isClick, setIsClick] = useState(false);
    const articles = [
        {
            id: 1,
            img : gedung7,
            headline : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, ducimus? Illum, praesentium consectetur. Voluptatem quos quibusdam culpa eos sed quam labore, similique recusandae eveniet facilis hic pariatur voluptas, iusto maiores."
        },
        {
            id: 2,
            img : gedung2,
            headline : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, ducimus? Illum, praesentium consectetur. Voluptatem quos quibusdam culpa eos sed quam labore, similique recusandae eveniet facilis hic pariatur voluptas, iusto maiores."
        },
        {
            id: 3,
            img : gedung3,
            headline : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, ducimus? Illum, praesentium consectetur. Voluptatem quos quibusdam culpa eos sed quam labore, similique recusandae eveniet facilis hic pariatur voluptas, iusto maiores."
        },
        {
            id: 4,
            img : gedung6,
            headline : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, ducimus? Illum, praesentium consectetur. Voluptatem quos quibusdam culpa eos sed quam labore, similique recusandae eveniet facilis hic pariatur voluptas, iusto maiores."
        },
        {
            id: 5,
            img : gedung5,
            headline : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, ducimus? Illum, praesentium consectetur. Voluptatem quos quibusdam culpa eos sed quam labore, similique recusandae eveniet facilis hic pariatur voluptas, iusto maiores."
        }
    ]
    return (
        <section className="p-40 flex flex-col gap-20 items-center justify-center border-b border-gray-300"> 
            <h1 className="text-4xl font-bold">Actual News</h1>
            <div className="flex flex-wrap items-center justify-center gap-12">
                {articles.map((article, index) => {
                    return (
                        <div className={`${index >= 4 && !isClick ? "hidden" : ""} flex flex-col gap-2 w-96 article`} key={article.id}>
                            <img className="min-h-[500px] max-h-[600px] h-full object-cover rounded-lg" src={article.img} alt="" />
                            <h3>{article.headline}</h3>
                            <button className="text-green-500 font-bold">More Details</button>
                        </div>
                    );
                })}
            </div>

            <button onClick={() =>setIsClick(!isClick)} className="btn border border-gray-300 px-12 mt-12">See {isClick? "Less" : "More"}</button>
        </section>
    );
};

export default SectionFive;
