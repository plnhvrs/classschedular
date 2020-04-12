export default {
  name: 'ClassOverview',
  data: function(){
  return{
            fields: ['registered','id','name', 'date','start','end', 'repeat'],
         rows: [{ id: 1, name: 'Paardrijden vrijdag 11' , date: 'Friday', start: "11:00", end: '12:00', repeat: 'Weekly', userRoles: 'Gevorderd' },
         { id: 2, name: 'Paardrijden vrijdag 11' , date: 'Friday', start: "11:00", end: '12:00', repeat: 'Weekly', userRoles: 'Gevorderd' }]
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
