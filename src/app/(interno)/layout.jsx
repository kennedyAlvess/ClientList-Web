'use client'
import HeaderPage from '../../components/header/headerPage';

export default function LayoutInterno(props) {
    return (
        <div className='flex flex-col gap-5'>
            <HeaderPage />
            <div >
                {props.children}
            </div>
        </div>            
        
    )
}
