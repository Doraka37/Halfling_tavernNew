import React ,{ useState } from 'react';
import {
    View,
} from 'react-native';

export function Background(props) {
    const [resete, setReset] = useState(false);

    return (
      <View style={{
        flex: 100
    }}>
      </View>
    );
  }

export default Background;