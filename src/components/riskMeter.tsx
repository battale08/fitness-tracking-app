import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type Props = {
  scores: Record<string, number>
};

export default function RiskOMeter({ scores }: Props) {
  const entries = Object.entries(scores);

  return (
    <View style={{padding:16}}>
      <Text style={{fontSize:18,fontWeight:'700'}}>Risk-o-meter ⚠️</Text>
      {entries.map(([key, val]) => (
        <View key={key} style={{flexDirection:'row', alignItems:'center', marginTop:12}}>
          <Svg width={48} height={48}>
            <Circle cx={24} cy={24} r={18} stroke="#ddd" strokeWidth={6} />
            <Circle
              cx={24} cy={24} r={18}
              stroke="#f66"
              strokeWidth={6}
              strokeDasharray={`${(val/100)*2*Math.PI*18},999`}
              strokeLinecap="round"
              rotation={-90}
              originX={24}
              originY={24}
            />
          </Svg>
          <View style={{marginLeft:12}}>
            <Text style={{fontWeight:'600'}}>{key}</Text>
            <Text style={{color:'#555'}}>{val}% risk</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
