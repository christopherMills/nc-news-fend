import React, { Component } from 'react';
import * as api from '../../utils/api';
import TopicSelector from './TopicSelector';
import ArticlesList from '../main/ArticlesList';

export default class TopicList extends Component {
  //
  state = {
    topics: [],
    selectedTopic: null,
  };

  topicSel = (aTopic) => {
    this.setState({
      selectedTopic: aTopic,
    });
  };

  componentDidMount() {
    api
      .getTopics()
      .then((topics) => {
        this.setState({
          topics,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id='TopicListPage'>
        <TopicSelector topicSel={this.topicSel} topicList={this.state.topics} />
        {this.state.selectedTopic ? (
          <ArticlesList topic={this.state.selectedTopic} />
        ) : (
          <p>nothing here until article selected</p>
        )}
      </div>
    );
  }
}
