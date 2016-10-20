import $ from "jquery";

let list_stu = {

	students : [],

	init: function(students){
		this.students = students;
		let $students = $('#students'),
			$one 	= $students.children('li').detach();

		for(let j=0; j<students.length; j++){

			let li 		= $one.clone(),
				student = this.students[j];

			student.id 	= j;
			li.attr("id","eleve"+j);
			console.log(student.first_name);
	
			$students.append(li); 
			$("#eleve"+j+" .stu").append(student.first_name+" "+student.name);
		}

	},
	
}
export {list_stu}