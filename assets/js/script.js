        var list1 = [];
        var list2 = [];
        var list3 = [];

        var n = 1;
        var x = 0;
       
        function AddRow() {
           
            console.log("cliked")
            var AddRown = document.getElementById('show');
            var NewRow = AddRown.insertRow(n);

            var e = document.getElementById('select');
            list1[x] = e.options[e.selectedIndex].text;
            list3[x] = document.getElementById("sample").value
            var e1 = document.getElementById('assign');
            list2[x] = e1.options[e1.selectedIndex].text;
            console.log(list3[x])

        
            var cel1 = NewRow.insertCell(0);
            var cel2 = NewRow.insertCell(1);
            var cel3 = NewRow.insertCell(2);
            var cel4 = NewRow.insertCell(3);
            var cel5 = NewRow.insertCell(4);
         
            cel1.innerHTML = list3[x];
            cel2.innerHTML = list1[x];
            cel3.innerHTML = list2[x];
            cel4.innerHTML = `13 Nov 2018`;
            cel5.innerHTML = `Not started`;


            n++;
            x++;
            
        }


        function searchFilter(){
            const input = document.getElementById("filter").value.toUpperCase()
            // console.log(input)
            const container = document.getElementById("card_list")
            // console.log(container)
            const cards = document.getElementsByClassName("side_boxs")
            // console.log(cards)
        
            for(let i=0; i< cards.length; i++){
                let Date = cards[i].querySelector("p.date")
                console.log(Date)
                if(Date.innerText.toUpperCase().indexOf(input) > -1){
                    cards[i].style.display=""
                }
                else{
                    cards[i].style.display = "none"
                }
            }
        }