function validateForm(form){
	
	var msg = "";
	
	// Dados Pessoais
	if(form.getValue("nome") == ""){
		msg += "O Nome não foi informado. ";
	}
	if(form.getValue("departamento") == ""){
		msg += "O Departamento não foi informado. ";
	}
	
	// Dados da Viagem
	if(form.getValue("dataInicio") == ""){
		msg += "A Data de Início da Viagem não foi informada. ";
	}
	if(form.getValue("dataTermino") == ""){
		msg += "A Data de Término da Viagem não foi informada. ";
	}
	if(form.getValue("origem") == ""){
		msg += "O local de Origem não foi informado. ";
	}
	if(form.getValue("destino") == ""){
		msg += "O local de Destino não foi informado. ";
	}
	if(form.getValue("tipoPassagem") == ""){
		msg += "O Tipo da Passagem não foi informado. ";
	}
	
	var justificativa = form.getValue("justificativa");
	
	if(justificativa == ""){
		msg += "A Justificativa não foi informada. ";
	}else if(justificativa.length() < 50){
		msg += "A justificativa deve ser mais detalhada. ";
	}
	
	// Comparar as datas
	const [dia1, mes1, ano1] = (form.getValue("dataInicio")).split('/');
    const [dia2, mes2, ano2] = (form.getValue("dataTermino")).split('/');
    
    const dataInicio = new Date(ano1, mes1 - 1, dia1);
    const dataTermino = new Date(ano2, mes2 - 1, dia2);
	
	if(dataInicio > dataTermino){
		msg += "A Data de Início deve ser anterior a Data de Término. ";
	}
	
	// Bloquear o envio se existir pendências
	if(msg != ""){
		throw msg;
	}
}