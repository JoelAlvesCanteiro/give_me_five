import $ from "jquery";
import {list_stu} from './list-eleve';

let draw_eleve = {
	div_clone:$("#draw_area .row").detach(),
	draw: function(){
		let student = list_stu.get_selected(),
            $display = this.div_clone;

        if (student!=null) {
        	$("#draw_area").empty();
            //  création de la représentation de la partie affichage
            let div         =  $display.clone();
            $('#draw_area').append(div);
            //changement de l'image
            $(".image_profile").attr("src",student.picture);
            //changement du nom
            $("#draw_area .nom").html(student.first_name+" "+student.name+" Score : 0");
		}
	}
}
export {draw_eleve}