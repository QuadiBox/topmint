import { useEffect} from 'react';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('experiences/curiosity');
    }, []);


    return (
        <div className='solarsystemHomePage flexCenter'>
            <h1>IN FOR SOME EXPERIENCE?</h1>
        </div>
    );
}

export default Index
