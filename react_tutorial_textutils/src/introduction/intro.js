
let name = "Clement";

function Intro() {
    return (
        <>

            <div className="blank">
                <h1>Hello {name}</h1>
            </div>
            <nav>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </nav>
            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quam soluta repellat veritatis enim explicabo, facere modi quis ullam reprehenderit quia asperiores sequi exercitationem quas optio! Doloribus veniam ipsum nam.
            </div>
        </>
    );
}

export default Intro;
