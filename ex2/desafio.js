

class Aluno {
 

    constructor(){
        this.id = 1;
        this.arrayAlunos = [];
       
    }

    salvarAluno(){
        let aluno = this.lerDados();
        if(this.validaCampos(aluno)){
            this.adicionarAluno(aluno);
        }
        
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        for (let i = 0; i < this.arrayAlunos.length; i++){
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_nota1 = tr.insertCell();
            let td_nota2 = tr.insertCell();
            let td_frequencia = tr.insertCell();

            td_id.innerText = this.arrayAlunos[i].id;
            td_nome.innerText = this.arrayAlunos[i].nomeAluno;
            td_nota1.innerText = this.arrayAlunos[i].primeiraNota;
            td_nota2.innerText = this.arrayAlunos[i].segundaNota;
            td_frequencia.innerText = this.arrayAlunos[i].frequencia;
        }
    }

    lerDados(){
        let aluno= {}
        
        aluno.id = this.id;
        aluno.nomeAluno = document.getElementById('name').value;
        aluno.primeiraNota = document.getElementById('nota1').value;
        aluno.segundaNota = document.getElementById('nota2').value;
        aluno.frequencia = document.getElementById('frequencia').value;

    }
    adicionarAluno(aluno){
        this.arrayAlunos.push(aluno);
        this.id++;

    }
    validaCampos(){
        let msg = '';

        if(aluno.nomeAluno == ''){
           msg += ' -informe o nome \n'
        }
        if(aluno.primeiraNota ==  ''){
            msg += "informe a primeira nota"
        }
        if(aluno.segundaNota ==  ''){
            msg += "informe a segunda nota"
        }
        if(aluno.frequencia ==  ''){
            msg += "informe a frequencia"
        }
        if(msg != '' ){
            alert(msg);
            return false;
        }

        return true;

    }

}

var aluno = new Aluno();