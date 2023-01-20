import * as React from 'react'

export default function Coffee() {
    /*
    1. Fetch from https://api.sampleapis.com/coffee/hot#
    2. Transform into JSX
    */
    let items = []
    let [coffeeTitles, setCoffeeTitles] = React.useState([])
    React.useEffect(async () => {
        // Run once after the page finished loading
        // Fetch from https://api.sampleapis.com/coffee/hot#
        let res = await fetch('https://api.sampleapis.com/coffee/hot')
        let coffees = await res.json()
        for (let i = 0; i < coffees.length; i++) {

            items.push(<li>
                <div style={{width: "40rem", overflow: "hidden"}}>
                    <div style={{width: "11rem", float: "left"}}><img style={{width:"10rem"}} src={coffees[i].image} /></div>
                    <div>  <b>{coffees[i].title}</b> - {coffees[i].description}</div>
                </div>
            </li>);
        }

        setCoffeeTitles(items)
    }, [])

    return (
        <>
            <h1>Coffee</h1>
            <ul>
                {coffeeTitles}
            </ul>
        </>
    )
}