
interface MetaArgs {
    title: string,
    description: string,
    image: string,
    url: string,
}

export function MetaTags(props: MetaArgs) {
    return (
        <>
            <link rel="stylesheet" href="/basic.css"/>
            <meta property="og:title" content={props.title}/>
            <meta property="og:description" content={props.description}/>
            <meta property="og:image" content={props.image}/>
            <meta name="twitter:card" content="summary_large_image"/>
        </>
    );
  }