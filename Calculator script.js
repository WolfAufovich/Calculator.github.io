// var Buttons_sect = document.getElementById('buttons_sect');
var Value = document.getElementById('value');
var Buttons = document.querySelectorAll('span');

znaki = ['-','+','*','/']
scobki = ['(',')']
zzifry = ['1','2','3','4','5','6','7','8','9','0',]
open_flag=0
for (i = 0; i < Buttons.length; i++){
	Buttons[i].addEventListener('click', function(){
		if (this.innerHTML == '=' && Value.innerHTML != ''){
			if(Value.innerHTML.includes('0/0')){
				Value.innerHTML = 'ti sho, tupoi?';
			} else{
				Value.innerHTML = eval(Value.innerHTML);
			}
		}
		else if (this.innerHTML == "Clear"){
			Value.innerHTML = '';
		}
		else if(this.innerHTML=='b'){
			Value.innerHTML = Value.innerHTML.slice(0, -1);
		}
		else if ((Value.innerHTML == '' || znaki.includes(Value.innerHTML[Value.innerHTML.length - 1]) || Value.innerHTML[Value.innerHTML.length - 1]=='(') && (this.innerHTML == '/' || this.innerHTML == '*' || this.innerHTML == '+' || this.innerHTML == '-' || this.innerHTML == '.')){
			Value.innerHTML +='';
		}
		else if( this.innerHTML=='(' && open_flag==0 && (znaki.includes(Value.innerHTML[Value.innerHTML.length - 1]) || Value.innerHTML=='')){
			Value.innerHTML += this.innerHTML;
			open_flag = 1;
		}
		else if(this.innerHTML==')' && open_flag==1 && (zzifry.includes(Value.innerHTML[Value.innerHTML.length - 1]))){
			Value.innerHTML += this.innerHTML;
			open_flag = 0;
		}
		else if (this.innerHTML != '=' && !scobki.includes(this.innerHTML)){
			Value.innerHTML += this.innerHTML;
		}
	})
}