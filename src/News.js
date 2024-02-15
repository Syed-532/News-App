export default function News(props)
{
    return(
        <div className="news">
            <div className="news-img">
                {
                    props.article.urlToImage!==null?
                    <img src={props.article.urlToImage}></img>:
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstartup.mp.gov.in%2Fphoto-gallery&psig=AOvVaw2s7gmNkfs37nyPtqGMBUJ7&ust=1708007329561000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDfl6SFq4QDFQAAAAAdAAAAABAJ"alt="image not available"></img>

                }
                

            </div>
            <h1>{props.article.title}</h1>
            <p>{props.article.description?.substring(0,100).concat("...")} <a href={props.article.url}target="-blank">read more</a></p>
           
            <div className="source">
                <p>{props.article.author}</p>
                <p>{props.article.source.name}</p>

            </div>

        </div>
    )
}