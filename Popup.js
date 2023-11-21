import "./App.css";
export default function Popup ({isVisible, errorMessage=null}) {
    if (isVisible) {
        return (
            <div className='popupBG' >
                <div className='popup' style={{ color: errorMessage ? "red" : 'green' }}>
                    {errorMessage != null ? errorMessage : 'The Form has been Submitted Successfully'}
                </div>
            </div>);
    } else {
            return (<></>);
    }
}
