export default function News(props){
    return (
        <>
            <h1>Components News</h1>
            <ul>
                <li>News 1</li>
                <li>News 2</li>
                <li>News 3</li>
                <li>News 4</li>
                <li>News 5</li>
            </ul>
            <h4>{props.myName} hey</h4>
        </>
    )
}