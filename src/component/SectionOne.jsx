import gedung1 from '../assets/gedung1.jpg';
import gedung2 from '../assets/gedung2.jpg';
import gedung3 from '../assets/gedung3.jpg';
import gedung4 from '../assets/gedung14.webp';
import gedung5 from '../assets/gedung5.jpg';
import gedung6 from '../assets/gedung6.jpg';

const SectionOne = () => {
    return (
        <section className="h-screen overflow-hidden">
            <div className="flex items-center justify-between h-full">
                <div className="p-20 flex-1">
                    <p className="text-[9rem] font-bold leading-none mb-10">Invest <br /> in real estate</p>
                    <div className="mt-8">
                        <button className="btn bg-green-500 text-white mr-4">Request a call</button>
                        <button className="btn border border-gray-600 font-medium">To get the consultation</button>
                    </div>
                </div>
                <div className="img-container flex-1 flex gap-4 justify-end mr-3">
                    <img className="gedung" src={gedung1} alt="" />
                    <img className="gedung" src={gedung2} alt="" />
                    <img className="gedung" src={gedung3} alt="" />
                    <img className="gedung" src={gedung4} alt="" />
                    <img className="gedung" src={gedung5} alt="" />
                    <img className="gedung" src={gedung6} alt="" />
                </div>
            </div>
        </section>
    );
};

export default SectionOne;
