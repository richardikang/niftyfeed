import React, { Component } from 'react';

function NFT() {
    return (
       <Card title="What is NFT?">
           <Text style={{margin: 10}}>
           Non-Fungible Token or NFT as it's ubiquitously known is anything that is digital (i.e artwork, soundtrack, etc...)
           which is encrypted so it can't be reproduced. Furthermore, they are minted just like any other cryptocurrency and 
           are individually unique from each other. NFTs are usually bought and sold as virtual commodities. However, their 
           inherent value only serves as a certificate of proprietorship and not the asset itself. If for example an NFT of an artwork 
           is purchased, the buyer doesn't own it in any form.
           <br />
           So what's the purpose of NFT?
           <br />
           NFTs are usually bought to support artists and to resell them for a profit. The demand is either based on the actual worth 
           of a creator or speculation fueled by the discovery of a new emerging artist.
           </Text>
       </Card>
    )
 }
 class About extends Component {
    
    static navigationOptions = {
        title: 'About'
    }
    render() {
    return(
        <ScrollView>
            <NFT />
        </ScrollView>
    )
    }
}
 export default Contact;