<form method="post" v-on:submit.prevent="updateKeep(fillKeep.id)">
    <div class="modal fade" id="edit">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3 class="modal-title text-center">Editar tarea</h3>
                </div>
                <div class="modal-body">

                    <div class="form-group">
                        <label for="keep">Editar Tarea</label>
                        <input type="text" name="keep" class="form-control" v-model="fillKeep.keep"/>
                        <span v-for="error in errors">@{{ error }}</span>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Editar</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</form>