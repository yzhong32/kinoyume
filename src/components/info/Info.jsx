// import Flex from "../../layout/flex";
// import Container from "../../layout/container";
//
// function Info({ title, content, ...props }) {
//     return (
//             <Flex flexDirection='column' justifyContent='center' alignItems='center'>
//             <h1>{title}</h1>
//             {content.map((line, index) => (
//                 <p key={index}>{line}</p>
//             ))}
//             </Flex>
//     );
// }
//
// export default Info;

import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0; /* Adjust the margin bottom as needed */
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-family: 'Courier New', monospace;
`;

const Paragraph = styled.p`
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 24px;
`;

function Info({ title, content }) {
    return (
        <Flex>
            <Title>{title}</Title>
            {content.map((line, index) => {
                if (line.startsWith('(')) {
                    return (
                        <Paragraph key={index}>
                            <a href={`tel:+18589990308`} style={{ color: 'black', textDecoration: 'none' }}>{line}</a>
                        </Paragraph>
                    );
                } else {
                    return (
                        <Paragraph key={index}>{line}</Paragraph>
                    );
                }
            })}
        </Flex>
    );
}
export default Info;
