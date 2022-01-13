
class Aluno {
 

    constructor(){
        this.id = 1;
        this.arrayAlunos = [];
       
    }

    salvarAluno(){
        let aluno = this.lerDados();
        if(this.validaCampos(aluno)){
            this.adicionarAluno(aluno);
            this.listaTabela();
        }
        
    }

   

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for (let i = 0; i < this.arrayAlunos.length; i++){
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_nota1 = tr.insertCell();
            let td_nota2 = tr.insertCell();
            let td_frequencia = tr.insertCell();
            let td_notaFinal = tr.insertCell();

            td_id.innerText = this.arrayAlunos[i].id;
            td_nome.innerText = this.arrayAlunos[i].nomeAluno;
            td_nota1.innerText = this.arrayAlunos[i].primeiraNota;
            td_nota2.innerText = this.arrayAlunos[i].segundaNota;
            
            td_frequencia.innerText = this.arrayAlunos[i].frequencia;
            td_notaFinal = this.arrayAlunos[i].notaFinal;
        }
    }

    adicionarAluno(aluno){
        this.arrayAlunos.push(aluno);
        this.id++;

    }

    lerDados(){
        let aluno = {};
        
        aluno.id = this.id;
        aluno.nomeAluno = document.getElementById('name').value;
        aluno.primeiraNota = document.getElementById('nota1').value;
        aluno.segundaNota = document.getElementById('nota2').value;
        aluno.frequencia = document.getElementById('frequencia').value;


        return aluno;
    }
   
    validaCampos(){
        let msg = '';

        if(aluno.nomeAluno == ''){
           msg += ' -informe o nome \n'
        }
        if(aluno.primeiraNota ==  ''){
            msg += "-informe a primeira nota \n"
        }
        if(aluno.segundaNota ==  ''){
            msg += "-informe a segunda nota \n"
        }
        if(aluno.frequencia ==  ''){
            msg += "-informe a frequencia \n"
        }
        if(msg != '' ){
            alert(msg);
            return false;
        }

        return true;

    }

    

}

var aluno = new Aluno();