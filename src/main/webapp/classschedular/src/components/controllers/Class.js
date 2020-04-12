export default {
  name: 'Class',

  data: function(){
  return{
         lesson: {id: 1, name: 'Paardrijden vrijdag 11' , startDate: '2020-01-01', startTime: "11:00", duration: '01:00', repeat: false, repeatEndDate: '2020-01-01',userRoles: 'Gevorderd', repeatType:'Weekly',repeatNumber:1,enrollmentDeadline:'01-04-2020',subscriptions: ['10-rittenkaart']},
         repeatOptions: [{value:'Daily', text:'Daily'},{value:'Weekly',text:'Weekly'}],
         subscriptionOptions: ['10-rittenkaart','maandabonnement','losse les']

	}},
	computed: {
      hasRepeatEndDate: {
			get: function(){
				return this.lesson.repeatEndDate != null;
			},
			set: function(newValue){

				if(newValue == false){
					this.lesson.repeatEndDate = null;
				}
				else if(newValue == true){
					this.lesson.repeatEndDate = new Date().toISOString().split('T')[0];
				}
			}
        }
	}
}