const { useState, useEffect } = React;

const Story = () => {

    const [stories, setStories] = useState('');
    const [catFact, setCatFact] = useState();

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
                stories.map(story => 
                    <article className="post" key={Math.random()}>
								<header>
									<div className="title">
										<h2><a href="#">{story.header}</a></h2>
										<p>Cesta tam a späť</p>
									</div>
									<div className="meta">
										<time className="published" datetime="2015-11-01">2022/08/05</time>
										<a href="#" className="author"><span className="name">{story.author}</span><img src="images/avatar.png" alt="" /></a>
									</div>
								</header>
								<span className="image featured"><img src={story.image} alt="" /></span>
								{story.story.map(e => <p>{e}</p>)}
                                <footer>
									<ul className="stats">
										<li><a href="#">General</a></li>
										<li><a href="#" className="icon solid fa-heart">28</a></li>
										<li><a href="#" className="icon solid fa-comment">128</a></li>
									</ul>
								</footer>
							</article>
                    )
            }
        </React.Fragment>
    );
}

let domContainer = document.querySelector('#story');
ReactDOM.render(<Story />, domContainer);
