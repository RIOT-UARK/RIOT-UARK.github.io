const Placeholder = () => {
    const src = 'https://pbzigykjmvchcxxxdpmo.supabase.co/storage/v1/object/public/Misc/Backend%20developer.jpg';
    return (
        <div className="page Placeholder" style={{ padding: 20 }}>
            <center>
                <h1>This page is under construction</h1>
                <p>Come back later and something will be here.</p>
                <img className="default-img" src={src} alt="Will be turned into something great!" width="500"></img>
            </center>
        </div>
    );
};

export default Placeholder;
