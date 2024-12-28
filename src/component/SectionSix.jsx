import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

const SectionSix = () => {
    return ( <section className="p-40">
        <h1 className='text-6xl p-40 text-gray-800 text-center'>The unique invesment oppotunity</h1>
        <div className='flex gap-12 items-center justify-center p-12'>
            <div className="box">
                <img src={icon1} alt="" />
                <h3>Private Investors</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus magni sint, obcaecati odio qui impedit expedita ratione labore unde numquam eius asperiores recusandae quo.</p>
                <button>View More</button>
            </div>
            <div className="box">
                <img src={icon2} alt="" />
                <h3>Private Investors</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus magni sint, obcaecati odio qui impedit expedita ratione labore unde numquam eius asperiores recusandae quo.</p>
                <button>View More</button>
            </div>
            <div className="box">
                <img src={icon3} alt="" />
                <h3>Private Investors</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus magni sint, obcaecati odio qui impedit expedita ratione labore unde numquam eius asperiores recusandae quo.</p>
                <button>View More</button>
            </div>
        </div>
    </section> );
}
 
export default SectionSix;