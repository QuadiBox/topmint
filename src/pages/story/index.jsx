import { useEffect} from 'react';
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('story/voyager');
    }, []);


    return (
        <div className='solarsystemHomePage flexCenter'>
            <h1>Story Page</h1>
        </div>
    );
}

export default index
