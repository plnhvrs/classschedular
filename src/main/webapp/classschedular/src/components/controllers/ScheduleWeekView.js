export default {
  name: 'ScheduleWeekView',

  data: function(){
  return{
         days: [{ id: 1, name: 'Monday',classes: [{id: 1,name: 'Paardijden 1', maxParticipants:4,canEnroll:true, isEnrolled:true, time: '10:00 - 11:00', users:[{id:1,name:'Pauline'},{name:'Christophe'}]}]},
         { id: 1, name: 'Tuesday', classes: []},
         { id: 1, name: 'Wednesday', classes: []},
         { id: 1, name: 'Thursday', classes: []},
         { id: 1, name: 'Friday', classes: [{id:2,name: 'Paardijden 315q',maxParticipants:4,time: '10:00 - 11:00',users:[{name:'Pauline'},{name:'Christophe'}]},{id:4,maxParticipants:4,name: 'Paardijden 31sdf5q', canEnroll:true, users:[],isEnrolled:false,time: '11:00 - 12:00'}]},
         { id: 1, name: 'Saturday', classes: []},
         { id: 1, name: 'Sunday', classes: [{id:3, name: 'Paardijden 315q',maxParticipants:4,time: '10:00 - 11:00', users:[],userRoles:[]}]}]
}},
    computed:
        {
            classesMappedToTable: function() {
                    const rows = [];
                    const maxClassesPerDay = Math.max(...this.days.map(function(day){ return day.classes.length}));
                    var i;
                    for(i = 0 ; i< maxClassesPerDay ; i++){
                        const columns = [];
                        this.days.forEach(function(day){
                            const cls = day.classes[i];
                                columns.push(cls);
                        });
                        rows.push(columns);
                    }
                    return rows;
            }
        },
        methods: {
            manageClass: function(cls){
                console.log(cls.name);
                 this.$bvModal.msgBoxConfirm('Are you sure you wish to enroll for '+cls.name+'?', {
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
            this.boxTwo = value
          })
          .catch(err => {
            // An error occurred
            console.log(err);
          });

            },
            getClass: function(cls){
                var styledClass = '';
                if(cls.users && cls.users.map(function(user){return user.name.toLowerCase()}).includes(this.$currentUser.name.toLowerCase())){
                    styledClass = 'isEnrolled'
                }else if(cls.userRoles){
                    styledClass = 'canEnroll '
                }
                return styledClass;
            },
            isEnrolled: function(cls){
                if(cls.users && cls.users.map(function(user){return user.name.toLowerCase()}).includes(this.$currentUser.name.toLowerCase())){
                return true;
                }
                return false;
            },
            canEnroll: function(cls){
                if(!this.isEnrolled(cls) && cls.userRoles && cls.maxParticipants > cls.users.length){
                return true;
                }
                return false;
            }
        }
}
