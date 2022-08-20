import axios from 'axios';
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {apiUrl, CommonContext} from '~/util';

export default () => {
  const {currentToken} = useContext(CommonContext);
  const send = () => {
    axios
      .get(`${apiUrl}/member/me`, {
        headers: {Authorization: `Bearer ${currentToken}`},
      })
      .then(d => console.log(JSON.stringify(d)))
      .catch(err => console.log(JSON.stringify(err)));
  };
  useEffect(() => {
    send();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HOME MAIN</Text>
    </View>
  );
};
