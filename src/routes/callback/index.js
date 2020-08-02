import { h, Component } from 'preact';

export default class Callback extends Component {

  // Note: `user` comes from the URL, courtesy of our router
  render({ platform }) {
    return (
      <div>
        <h1>callbakc</h1>
        {platform}
      </div>
    );
  }
}
