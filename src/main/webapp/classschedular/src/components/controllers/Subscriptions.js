import Class from '../views/Class.vue';

export default {
  name: 'Subscriptions',
  components:{
    Class
  },
  data: function(){
  return{
            fields: ['edit','id','name', 'type','details','cost','delete'],
         rows: [{ id: 1, name: 'Maandabonnement', type:'Time box',details: '1 month', cost:100 },
         { id: 1, name: 'Losse los', type:'Single class',details: '-',cost:15 },
         { id: 1, name: '10-Rittenkaart', type:'Class credit',details: '10 classes',cost:100 }]
        }
    },
    methods: {
        deleteClass: function(classToDelete){
               this.$bvModal.msgBoxConfirm('Are you sure you wish to delete '+classToDelete.name+'?', {
               title: 'Please Confirm',
               size: 'sm',
               buttonSize: 'sm',
               okVariant: 'danger',
               okTitle: 'YES',
               cancelTitle: 'NO',
               footerClass: 'p-2',
               hideHeaderClose: false,
               centered: true
             })
               .then(value => {
                 console.log(value);
               })
               .catch(err => {
                 // An error occurred
                 console.log(err);
               });
             }
         }
}
