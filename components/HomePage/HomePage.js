import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ScrollView,Animated,TextInput,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fonts from '../../src/utils/Fonts'
import NewsPage from './NewsPage'

type Props = {};
class HomePage extends Component<Props>{
  constructor(props){
    super(props)
    this.state={
      scrollY: new Animated.Value(0),
      test:'100',
      test2:50
    }
  }
  handleScroll(e){
    //this.setState({scrollY: new Animated.Value(e.nativeEvent.contentOffset.y)})
    if(e.nativeEvent.contentOffset.y >= 50){
      this.state.scrollY.setValue(50)
    }
    else {
      this.state.scrollY.setValue(e.nativeEvent.contentOffset.y)
    }

  }
  render(){

    const cardTop = this.state.scrollY.interpolate({
      inputRange:[0,20],
      outputRange:[0,1],
      extropolate: 'clamp'
    })

    const colorTop = this.state.scrollY.interpolate({
      inputRange:[0,50],
      outputRange:['lightskyblue','#CD5C5C'],
      extropolate: 'clamp'
    })

    return(
      <View style={styles.container}>
        <Animated.View style={{elevation: cardTop,zIndex: 100,alignItems: 'center',justifyContent: 'center',top:0,left: 0,right: 0,backgroundColor: colorTop,minHeight: 50,height: 50 ,position: 'absolute'}}>
          <Text style={{color:'white',fontSize: 20,fontWeight: 'bold'}}>WASHER</Text>
        </Animated.View>
        <Animated.ScrollView onScroll={this.handleScroll.bind(this)} style={{flex:1,zIndex: 0}}>
          <View style={{width: '100%',backgroundColor: 'lightskyblue',height: 80,marginTop: 50,padding: 10}}>
            <Another/>
          </View>
          <Order/>
          <NewsPage/>

        </Animated.ScrollView>
      </View>
    )
  }
}


class Another extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <View style={{width: '100%',height: 80,marginTop: 10,position: 'absolute',bottom: -20,left: 10}}>
        <View style={{flex:1,flexDirection: 'row',backgroundColor: 'white',elevation: 2,borderRadius: 5}}>
          <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}><Icon name='shower' style={{color:'blue',fontSize: 30,fontFamily: 'SukhumvitSet-Text'}} /><Text style={{fontSize: 10}}>อาบน้ำ</Text></View>
          <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}><Icon name='shopping-basket' style={{color: 'green',fontSize: 30}} /><Text style={{fontSize: 10}}>ตระกร้า</Text></View>
          <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}><Icon name='heartbeat' style={{color: 'red',fontSize: 30}} /><Text style={{fontSize: 10}}>หัวใจ</Text></View>
          <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}><Icon name='wifi' style={{color: 'orange',fontSize: 30}} /><Text style={{fontSize: 10}}>WIFI</Text></View>
        </View>
      </View>
    )
  }
}

class Order extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <View style={{width: '100%',height: 100,paddingTop: 30}}>
        <View style={{flex:1,backgroundColor: '#f5f5f5'}}>
          <FlatList
            horizontal={true}
            data={[{key: 'breeze'}, {key: 'breeze'},{key: 'breeze'},{key: 'breeze'},{key: 'breeze'},{key: 'breeze'}]}
            renderItem={({item}) => <MyFlat data={item.key}/>}
          />
        </View>
      </View>
    )
  }
}

class MyFlat extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <View style={{backgroundColor: 'white',borderRadius: 5,justifyContent: 'center',alignItems: 'center',width: 100,marginRight: 5}}>
        <Image style={{width: 66, height: 58}} source={{uri:'https://cdn.homepro.co.th/catalog/1050000/447x447/20171025_1089488.jpg'}}></Image>
        <Text style={{fontSize: 10, color: 'green'}}>{this.props.data}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    fontFamily: Fonts.SukhumvitSet
  },

});



export default HomePage
