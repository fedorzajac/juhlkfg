const { useState, useEffect } = React;

const Posts = () => {

    const [stories, setStories] = useState('');
    // const [catFact, setCatFact] = useState();

    const inputHandler = e => {
        setName(e.target.value);
    }

    const buttonHandler = () => {
        fetch('stories.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setStories(data);
            });
    }

    useEffect(() => {
        buttonHandler()
    },[]);

    return (
        <React.Fragment>
            {
                stories &&
                Object.values(stories).map(story => 
                    <article key={Math.random()}>
                        <header>
                            <span className="date">{story.time}</span>
                            <h2><a href="#">{story.header}</a></h2>
                        </header>
                        <a href="#" className="image fit"><img src={story.image} alt="" height="auto" /></a>
                        {/* {story.story.map(e => <p>{e}</p>)} */}
                        <p>
                            {story.story[0].substr(0,100)}...
                        </p>
                        <ul className="actions special">
                            <li><a href="#" className="button">Full Story</a></li>
                        </ul>
                    </article>
                    )
            }
        </React.Fragment>
    );
}

let domContainer = document.querySelector('#posts');
ReactDOM.render(<Posts />, domContainer);
