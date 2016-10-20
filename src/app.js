import {list_stu} from './list-eleve';
import Student from './eleve-class';

let info_eleve = {

	init: function(){

		// ajout élèves
		let students = [
					new Student('Joël','ALVES CANTEIRO','img/Joel.jpg'),
					new Student('Mattieu','VENDEVILLE','img/Mattieu.jpg'),
					new Student('Clément','TEBOUL','img/clementt.jpg'),
					new Student('Victor','MOUTTON','img/victor.jpg'),
					new Student('Bastien','LHUAIRE','img/bastien.jpg'),
					new Student('Loan','CAMPAN','img/loan.jpg'),
					new Student('Stan','XIONG','img/stan.jpg'),
					new Student('Pierre','SAIGOT','img/pierre.jpg'),
					new Student('Axel','COQUIN','img/axel.jpg'),
					new Student('Félix','NAHON','img/felix.jpg'),
					new Student('Julien','GASTINEAU','img/julien.jpg'),
					new Student('Clément','DUSSOL','img/clementd.jpg')

				];

	list_stu.init(students);
	}
}

info_eleve.init()