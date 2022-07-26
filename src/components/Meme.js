import React from "react";




export default function Meme() {

    const [gif, setGif] = React.useState({
        randomGif: "",
        tvshow: "",
        caption: ""
    });
    const [fetchedGif, setFetchedGif] = React.useState(false);
    console.log("component rendered")

    React.useEffect(() => {
        console.log("effect ran")

        const api_key = "SCrH6EN3YHUbsSeGVFYssch0gphkOfFG"
        let tag = gif.tvshow;

        fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}&rating=r`)
            .then(res => res.json())
            .then(data => setGif(prevGif => ({
                ...prevGif,
                randomGif: data.data.images.fixed_height.url
            }))
            )
    }, [fetchedGif, gif.tvshow])

    function getRandomGiphy() {
        setFetchedGif(!fetchedGif)
        console.log('button clicked')
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setGif(prevGif => ({
            ...prevGif,
            [name]: value
        }))


    }

    return (
        <main>
            <div className="form">
                <label htmlFor="show">Choose a TV show below.</label>
                <select
                    id="tvshow"
                    value={gif.tvshow}
                    onChange={handleChange}
                    className="form--inputs"
                    name="tvshow"
                >
                    <option value="">-- Choose a tv show --</option>
                    <option value="the+office">The Office.</option>
                    <option value="curb+your+enthusiasm">Curb Your Enthusiasm.</option>
                    <option value="simpsons">The Simpsons</option>
                    <option value="rick+and+morty">Rick and Morty</option>
                    <option value="iasip">Its Always Sunny In Philadelphia.</option>
                    <option value="parks+and+recreation">Parks and Recreation.</option>


                </select>
                <p>Enter your caption here: </p>
                <input
                    type="text"
                    placeholder="Caption"
                    className="form--inputs"
                    name="caption"
                    onChange={handleChange}
                    value={gif.caption}
                />


                <button
                    onClick={getRandomGiphy}
                    className="form--button">Get a new giphy
                </button>
            </div>
            <div className="gif">
                <div className="gif-img"><img src={gif.randomGif} alt="a meme" className="meme--img" /></div>
            </div>

            <h2 className="gif--text caption"> {gif.caption}</h2>

        </main>
    )
}
