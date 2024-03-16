import * as Styled from './styles';
import Flex from '../../../layout/flex';
import extractDayAndTime from '../../../utils/helper';
import PropTypes from 'prop-types';

function Info({title, content}) {
  const contentType = content[0];
  const renderContent = () => {
    switch (contentType) {
      case 'addr':
        return content.slice(1).map((line, index) => (
          <Styled.Paragraph key={index}>{line}</Styled.Paragraph>
        ));
      case 'phone':
        return content.slice(1).map((line, index) => (
          <Styled.Paragraph key={index}>
            <a
              href={`tel:${line}`}
              style={{color: 'black', textDecoration: 'none'}}
            >{line}</a>
          </Styled.Paragraph>
        ));
      case 'open':
        const {days, times} = extractDayAndTime(content);
        const dayComponent = <Flex
          flexDirection={'column'}
          alignItems={'end'}
        >
          {days.map((line, index) => (
            <Styled.Paragraph key={index}>{line}</Styled.Paragraph>
          ))}
        </Flex>;

        const timeComponent = <Flex
          flexDirection={'column'}
          alignItems={'start'}
        >
          {times.map((line, index) => (
            <Styled.Paragraph key={index}>{line}</Styled.Paragraph>
          ))}
        </Flex>;


        return (
          <Flex justifyContent={'center'} gap={'22.76px'}>
            {dayComponent}
            {timeComponent}
          </Flex>
        );
      default:
        return <Styled.Paragraph/>;
    }
  };

  return (
    <Flex flexDirection={'column'} justifyContent={'center'}>
      <Styled.Title>{title}</Styled.Title>
      {renderContent()}
    </Flex>
  );
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Info;

