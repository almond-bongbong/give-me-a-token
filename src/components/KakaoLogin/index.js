import { h, Component } from 'preact';
import Input from '../Input';
import Button from '../Button';
import Result from '../Result';

class KaKaoLogin extends Component {
  state = {
    clientKey: '15aeb436a7c03a06c86277eba1ee485c',
    token: null,
  };

  handleClientKey = (e) => {
    this.setState({ clientKey: e.target.value });
  };

  handleLogin = () => {
    if (!this.state.clientKey) {
      alert('Client Key를 입력해주세요.');
      return;
    }

    window.Kakao.cleanup();
    window.Kakao.init(this.state.clientKey);
    window.Kakao.Auth.login({
      success: (response) => {
        this.setState({
          token: response.access_token,
        });
      },
      fail: (error) => {
        alert(error);
      },
    });
  };

  render() {
    return (
      <div>
        <Input label="client key" value={this.state.clientKey} onChange={this.handleClientKey} />
        <Button color="#fee501" onClick={this.handleLogin}>카카오 로그인</Button>
        {this.state.token && (
          <Result>{this.state.token}</Result>
        )}
      </div>
    );
  }
}

export default KaKaoLogin;