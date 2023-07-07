import { useEffect} from 'react';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/playground');
    }, []);


    return (
        <div className='solarsystemHomePage flexCenter'>
            <h1>INTERACTIVE HOMEPAGE</h1>
        </div>
    );
}

export default Index