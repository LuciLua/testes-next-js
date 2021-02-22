function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (

        <div>
            <div><h1>{dynamicDateString} (dinâmico)</h1></div>
            <div><h1>{props.staticDateString} (Estático com delay)</h1></div>
        </div>

    )

}

export async function getStaticProps(){

    console.log('> Passando pelo getStaticProps();')

    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return{
        props: {
            staticDateString
        },
        revalidate: 1
    }
}


export default Tempo;