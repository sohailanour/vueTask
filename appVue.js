var vm=new Vue({
            el:'#apptest',
            data:{
                counter: 0,
                tableContents : [],
            },
            methods: {
                addToTable: function (e) {
                    this.tableContents.push(e.target.value);
                    e.target.value = '';
                    console.log(this.tableContents);
                }
            }
        }) 