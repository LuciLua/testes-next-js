import Link from 'next/link';

function Home(){
    return (<div>
        
    <h1>Home</h1>
   
    <Link href="/sobre">
    <a>Sobre</a>
    </Link>
    <img src="https://i.imgur.com/yVKEBjn.png"></img>

    <Link href="/tempo">
    <a>Tempo</a>
    </Link>
    
    </div>)
    
}

export default Home