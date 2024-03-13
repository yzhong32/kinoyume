import * as Styled from './styles';

function Figure({ src, alt, width }) {
    return (
        <Styled.Figure>
            <img src={src} alt={alt} style={{width: width}}/>
        </Styled.Figure>
    );
}

export default Figure;