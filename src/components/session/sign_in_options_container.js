import {connect} from 'react-redux';
import * as  appActions from '../../../actions/index';
....
......
<Button large onPress={this.onLoginPress.bind(this)} title="Continue">
...
....

 onLoginPress() {
    this.props.dispatch(appActions.login());
  }
...
....

export default connect()(Login);
