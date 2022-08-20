import React from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {imgUtil} from '~/asset';
import {Img, Margin, OText, StatusMargin} from '~/components';
import {bottomSpace, colors, pixel} from '~/util';

interface Props {
  isClear: boolean;
  isLoading: boolean;
  isAgreeTerm: boolean;
  setPassword: (v: string) => void;
  setIdentifier: (v: string) => void;
  setIsAgreeTerm: (v: boolean) => void;
  onLogin: () => void;
  onPressTerm: () => void;
}

export default ({
  isClear,
  setPassword,
  setIdentifier,
  setIsAgreeTerm,
  isAgreeTerm,
  onLogin,
  isLoading,
  onPressTerm,
}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
      }}>
      <StatusMargin />
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
          <Margin margin={pixel(130)} />
          {/* 타이틀 */}
          <View style={{width: '100%'}}>
            <OText
              text={'충북을 새롭게'}
              color={colors.black.d}
              weight={'R'}
              fontSize={28}
            />
            <OText
              text={'도민을 신나게'}
              color={colors.black.d}
              weight={'R'}
              fontSize={28}
            />
            <View style={{flexDirection: 'row'}}>
              <OText
                text={'충북학사 '}
                color={colors.blue}
                weight={'B'}
                fontSize={28}
              />
              <OText
                text={'서/동서울관'}
                color={colors.green}
                weight={'B'}
                fontSize={28}
              />
            </View>
            <Margin margin={pixel(75)} />
            {/* 입력 폼 */}
            <TextInput
              style={{
                width: '100%',
                backgroundColor: colors.white.l,
                paddingHorizontal: pixel(22),
                paddingVertical: pixel(18),
                borderRadius: pixel(100),
                margin: 0,
              }}
              placeholder={'아이디(학사번호) 입력'}
              placeholderTextColor={colors.black.l}
              onChangeText={e => setIdentifier(e)}
            />
            <Margin margin={pixel(10)} />
            <TextInput
              style={{
                width: '100%',
                backgroundColor: colors.white.l,
                paddingHorizontal: pixel(22),
                paddingVertical: pixel(18),
                borderRadius: pixel(100),
                margin: 0,
              }}
              secureTextEntry
              placeholder={'비밀번호(생년월일 8자리) 입력'}
              placeholderTextColor={colors.black.l}
              onChangeText={e => setPassword(e)}
            />
            <Margin margin={pixel(16)} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={{width: pixel(18), aspectRatio: 1}}
                hitSlop={{
                  top: pixel(13),
                  left: pixel(13),
                  right: pixel(13),
                  bottom: pixel(13),
                }}
                onPress={() => setIsAgreeTerm(!isAgreeTerm)}>
                <Img
                  source={imgUtil.icons.bg_check_box}
                  color={isAgreeTerm ? colors.green : '#D7D7D7'}
                  style={{flex: 1}}
                />
                {isAgreeTerm && (
                  <Img
                    source={imgUtil.icons.checked_check}
                    // color={isAgreeTerm ? colors.green : '#D7D7D7'}
                    style={{
                      width: pixel(18),
                      aspectRatio: 1,
                      position: 'absolute',
                      zIndex: 1,
                    }}
                  />
                )}
              </TouchableOpacity>
              <Margin isHorizontal margin={8} />
              <TouchableOpacity onPress={onPressTerm}>
                <OText
                  text={'개인정보 이용 동의'}
                  color={colors.black.d}
                  fontSize={14}
                  weight={'R'}
                  style={{textDecorationLine: 'underline'}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Margin margin={pixel(70)} />
          <TouchableOpacity
            onPress={onLogin}
            disabled={!isClear}
            style={{
              paddingHorizontal: pixel(66),
              paddingVertical: pixel(18),
              backgroundColor: isClear ? colors.blue : colors.black.m,
              borderRadius: pixel(100),
            }}>
            {isLoading ? (
              <ActivityIndicator color={colors.white.f} />
            ) : (
              <OText
                text="로그인"
                color={colors.white.f}
                fontSize={14}
                weight="B"
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
          <OText
            text={'아이디와 비밀번호 분실시'}
            color={colors.black.m}
            weight="M"
            fontSize={12}
          />
          <View style={{flexDirection: 'row'}}>
            <OText
              text={'지원팀('}
              color={colors.black.m}
              weight="M"
              fontSize={12}
            />
            <TouchableOpacity>
              <OText
                text={'02-436-2004'}
                color={colors.blue}
                weight="M"
                fontSize={12}
              />
            </TouchableOpacity>
            <OText
              text={')로 문의'}
              color={colors.black.m}
              weight="M"
              fontSize={12}
            />
          </View>

          <Margin margin={bottomSpace} />
        </View>
      </View>
    </View>
  );
};
