export default function Home({button, value, title}) {
    const date = new Date()
    return (
        <>
            <div className="d-flex p-2 bd-highlight">
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">{button}
                </button>
            </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                     aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">{title}</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {value} , {date.toLocaleString()}
                    </div>
                </div>

        </>
    );
}