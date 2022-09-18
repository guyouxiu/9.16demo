
module.exports = ({
  devServer:{
    proxy:{
      'lejuAdmin':{
        target:'http://leju.bufan.cloud/',
        changeorigin:true
      }
    }
  }
})
