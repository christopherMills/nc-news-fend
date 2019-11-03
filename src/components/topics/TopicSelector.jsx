import React from 'react';

const TopicSelector = ({ topicSel, topicList }) => {
  return topicList.length ? (
    <div id='topicSelectorMain'>
      <p>Please select a topic:</p>
      {topicList.map((eachTopic) => {
        return (
          <button
            onClick={() => {
              topicSel(eachTopic.slug);
            }}
            key={eachTopic.slug}>
            [{eachTopic.slug}]
          </button>
        );
      })}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default TopicSelector;
