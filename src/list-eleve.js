import $ from "jquery";

let list_stu = {

	students : [],
	selected: null,

	get_selected: function(){
		return this.selected;
	},

	select_student:  function( student ){

		this.selected = student;
		$('#students li').removeClass('selected')
						.eq(student.id)
						.addClass('selected');
	},

	init: function(students,draw_eleve){
		this.students = students;
		let $students = $('#students'),
			$one 	= $students.children('li').detach();

		for(let j=0; j<students.length; j++){

			let li 		= $one.clone(),
				student = this.students[j];

			student.id 	= j;
			li.attr("id","eleve"+j);

			//changement de nom pour chaque input
			$(li).find('input').attr('name', 'checkbox' + j);

			$students.append(li); 
			$("#eleve"+j+" .stu").append(student.first_name+" "+student.name);
		}
		
		this.select_student(this.students[0]);

		// gestion du clic
		
		let self = this;

		$('#students').on('click', 'a', function(){

			let index = $( "#students a" ).index( this );
			self.select_student(self.students[index]);	
			draw_eleve.draw()
		});

		// Checker les inputs
	
		$('#students').on('click', 'input', function(){
		 	console.log(this.value)
		 	console.log($(this).parent().find('li'));
		 	if( $('input[value=present]').is(':checked') ){
    			alert("Elève présent");
			} else if( $('input[value=retard]').is(':checked') ){
    			alert("Eleve en retard");
			}else if( $('input[value=absent]').is(':checked') ){
				alert("Eleve absent");
			};	
		});
	}
}
export {list_stu}