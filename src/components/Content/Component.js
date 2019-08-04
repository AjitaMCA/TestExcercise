import React, { PropTypes } from 'react';
import { Block, Text } from 'rebass';

const Content = ({
  paragraphs,
  scrollableParagraph,
}) => {
  const ScrollableParagraph = scrollableParagraph(Block);

  return (
    <Block mt={4} style={{'margin-top': '0px'}}>
      
      {paragraphs.map(p =>
        <ScrollableParagraph key={p.id} id={p.id}>
          
          <Text>{p.content}</Text>
        </ScrollableParagraph>
      )}
    </Block>
  );
};

Content.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
   // title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf.isRequired,
  })).isRequired,
  scrollableParagraph: PropTypes.func.isRequired,
};

export default Content;
