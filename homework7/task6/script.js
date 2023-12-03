const { useState, useEffect } = React; //destructuring

const WindowSize = () => {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    const updateSize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []); //hook adds the capability to perform side effects

    return (
        <div>
            <p>Width: {size.width}</p>
            <p>Height: {size.height}</p>
        </div>
    );
};

ReactDOM.render(<WindowSize />, document.getElementById('root'));
