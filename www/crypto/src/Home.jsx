import PropTypes from 'prop-types'; // Импортируем PropTypes

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

// Указываем проверку пропсов с помощью PropTypes
Home.propTypes = {
    button: PropTypes.string, // Пропс button должен быть string
    value: PropTypes.any, // Пропс value может быть любого типа
    title: PropTypes.string.isRequired // Пропс title должен быть строкой и обязателен
};