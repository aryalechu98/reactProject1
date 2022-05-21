
export default function Main(props){
    return (
        <main>
            <div className="bg-img">
                <h1>Fun facts about React</h1>
                <ul>
                    {props.listItems.map((items, i)=>{
                       return <li key={i}>{items}</li>
                    })}
                </ul>
            </div>
        </main>
    )
}