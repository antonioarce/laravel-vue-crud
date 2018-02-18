    new Vue({
        el: '#crud',
        created: function(){
            this.getkeeps();
        },
        data:{
            keeps: [],
            pagination: {
                total: 0,
                current_page: 0,
                per_page: 0,
                last_page: 0,
                from: 0,
                to: 0,
            },
            newKeep: '',
            errors: [],
            fillKeep: {'id':'', 'keep':''},
            offset: 3
        },
        computed: {
            isActived: function () {
                return this.pagination.current_page;
            },
            pagesNumber: function () {
                if (!this.pagination.to){
                    return [];
                }
                var from = this.pagination.current_page - this.offset;
                from = from < 1 ? 1 : from;
                var to = from + (this.offset * 2);
                to = to >= this.pagination.last_page ? this.pagination.last_page : to;
                var pageArray = [];
                while (from <= to){
                    pageArray.push(from);
                    from++;
                }
                return pageArray;
            }
        },
        methods: {
            getkeeps: function (page) {
                var url = 'tasks?page=' + page;
                axios.get(url).then(response => {
                    this.keeps = response.data.tasks.data;
                    this.pagination = response.data.pagination;
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
            },
            changePage: function (page) {
                this.pagination.current_page = page;
                this.getkeeps(page);
            }
        }
    });