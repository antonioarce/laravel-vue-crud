    new Vue({
        el: '#crud',
        created: function(){
            this.getkeeps();
        },
        data:{
            keeps: [],
            newKeep: '',
            errors: [],
            fillKeep: {'id':'', 'keep':''},
        },
        methods: {
            getkeeps: function () {
                var url = 'tasks';
                axios.get(url).then(response => {
                    this.keeps = response.data;
                });
            },
            deleteKeep: function (keep) {
                var url = 'tasks/' + keep.id;
                axios.delete(url).then(response => {
                    this.getkeeps();
                    toastr.success('Eliminado Correctamente!!');
                });
            },
            createKeep: function () {
                var url = 'tasks';
                axios.post(url, {
                    keep: this.newKeep,
                }).then(response => {
                    this.getkeeps();
                    this.newKeep = '';
                    this.errors = [];
                    $('#create').modal('hide');
                    toastr.success('Nueva tarea creada con exito');
                }).catch(error => {
                    this.errors = error.response.data;
                });
            },
            editKeep: function (keep) {
                this.fillKeep.id = keep.id;
                this.fillKeep.keep = keep.keep;
                $('#edit').modal('show');
            },
            updateKeep: function (id) {
                var url = 'tasks/' + id;
                axios.put(url,this.fillKeep).then(response => {
                    this.getkeeps();
                    this.fillKeep = {'id':'', 'keep':''};
                    this.errors = [];
                    $('#edit').modal('hide');
                    toastr.success('Tarea actualizada con exito!!');
                }).catch(error => {
                    this.errors = error.response.data;
                });
            }
        }
    });