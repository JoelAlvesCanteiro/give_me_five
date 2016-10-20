import $ from "jquery";

export default function init(list_students){
	
		this.list_students = list_students;		
		
		let $students = $('#students'),
			$one 	= $students.children('li').detach();

		for(let j=0; j<list_students.length; j++){

			let li 		= $one.clone(),
				students 	= this.list_students[j];

			$list_students.append(li);
	}
}