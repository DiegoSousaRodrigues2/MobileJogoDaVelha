import React from 'react';
import {StyleSheet, View} from 'react-native';

import Quadrado from './Quadrado';

export default class App extends React.Component{
    renderQuadrado(i){
        return(
            <Quadrado
             value={this.props.quadrado[i]}
             desabilitado={this.props.desabilitado}
             onClick={() => this.props.onClick(i)}
            />
        );
    }

    render(){
        return(
            <View>
                <View>
                    {this.renderQuadrado(0)}
                    {this.renderQuadrado(1)}
                    {this.renderQuadrado(2)}
                </View>
                
                <View>
                    {this.renderQuadrado(3)}
                    {this.renderQuadrado(4)}
                    {this.renderQuadrado(5)}
                </View>
                
                <View>
                    {this.renderQuadrado(6)}
                    {this.renderQuadrado(7)}
                    {this.renderQuadrado(8)}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});