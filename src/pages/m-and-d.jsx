import "./m-and-d.css";

export default ()=>{
    return(
        <div id="map">
            <div className="mapContainer container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27847.935853226856!2d91.48523606399692!3d22.42968216152968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acb6c450e38449%3A0xe839b6bcb72b150e!2sSandwip!5e0!3m2!1sbn!2sbd!4v1701643831286!5m2!1sbn!2sbd" 
                    style={{
                        width: "400", height: "300", border: "none"
                    }} allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}