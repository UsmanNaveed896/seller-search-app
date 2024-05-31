import Img from '../../assets/search-normal.png'
import Img1 from '../../assets/message-text.png'
import Img2 from '../../assets/Group 7.png'
import Img3 from '../../assets/Group 8.png'
import { useTranslation } from 'react-i18next';
const Header = () => {
  
        const { i18n } = useTranslation();

        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };
  
    return (
        <>
            <div className="p-2">
                <div className="flex justify-end gap-3 items-center">
                    <div>
                        <button onClick={() => changeLanguage('en')}>English</button>
                        <button onClick={() => changeLanguage('ar')}>Arabic</button>
                        <button onClick={() => changeLanguage('fr')}>French</button>
                    </div>
                    <div className="rounded-full bg-[#E3E3E7]  py-2 px-6">
                        <img src={Img} alt='abc' />
                    </div>
                    <div className='px-3 py-2 rounded bg-white shadow'>
                        <img src={Img1} alt='abc' />
                    </div>
                    <div className='px-3 py-2 rounded bg-white shadow'>
                        <img src={Img2} alt='abc' />
                    </div>
                    <div>
                        <img className='h-9' src={Img3} alt='abc' />
                    </div>
                </div>
            </div>
        </>
    )
};
export default Header;