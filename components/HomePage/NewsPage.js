import React,{Component} from 'react'
import {View,Text,FlatList,Image} from 'react-native'

export default class NewsPage extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={{padding: 5,flex: 1,backgroundColor: '#f5f5f5'}}>
        <FlatList
          data={[{key: 'breeze',name:'meen'}, {key: 'breeze',name:'wan'},{key: 'breeze',name:'roon'},{key: 'breeze',name:'ruk'}]}
          renderItem={({item})=> <NewsItem data={item.key} name={item.name}/>}>

        </FlatList>
      </View>
    )
  }
}

class NewsItem extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={{backgroundColor: 'white',marginBottom: 10,borderRadius: 5}}>
        <View style={{width:'100%',padding: 5,marginBottom: 5,flexDirection: 'row',alignItems: 'center'}}>
          <View style={{width: 50,height: 50,overflow: 'hidden',borderRadius: 25,marginRight: 10}}>
            <Image style={{width: 50,height: 50}} source={{uri:'https://image.dek-d.com/27/0757/7675/127254767'}}></Image>
          </View>
          <View>
            <Text style={{fontSize: 20}}>
              {this.props.name}
            </Text>
            <Text style={{fontSize: 10}}>
              ได้อัพเดทรูปโปรไฟล์
            </Text>
          </View>


        </View>
        <View style={{width: '100%',marginTop: 5}}>
          <Image style={{width: "100%",height: 300}} source={{uri:'https://image.dek-d.com/27/0757/7675/127254767'}}/>
        </View>


      </View>
    )
  }
}
