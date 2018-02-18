<form method="post" v-on:submit.prevent="createKeep">
<div class="modal fade" id="create">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3 class="modal-title text-center">Nueva tarea</h3>
            </div>
            <div class="modal-body">

                <div class="form-group">
                    <label for="keep">Crear Tarea</label>
                    <input type="text" name="keep" class="form-control" v-model="newKeep"/>
                    <span v-for="error in errors">@{{ error }}</span>
                </div>

            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Crear</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</form>