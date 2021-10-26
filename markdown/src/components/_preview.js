


const Preview = ({ converted }) => {
    
    return (
        <div id="preview" dangerouslySetInnerHTML={{__html:converted}}>
            
        </div>
    );
}

export default Preview;