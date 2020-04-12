import User from '../views/User.vue'

export default {
  name: 'Users',
  components:{
    User
  },
  data: function(){
  return{
         fields: ['edit','id','active','name','roles','subscriptions','addSubscription'],
         users: [{ id: 1, name: 'Pauline', active:false, roles:['Gevorderd','admin'], subscriptions: [{id:1, name: 'Maandabonnement',currentCredit: null,starting:'01-04-2020', ending:'31-04-2020'}]},
         { id: 2, name: 'Christophe', active:true, roles:['Beginner'],subscriptions: [{id:1, name: '10-rittenkaart', currentCredit: 8,starting:'01-04-2020', ending:'31-12-2020'}]}]
}
}
}
