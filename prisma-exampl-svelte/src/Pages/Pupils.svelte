<script lang="ts">
  import {
    fatchPupils,
    addPupil,
    deleteOne,
    updataPupil,
    pupils,
  } from "../Store/pupil.store";
  fatchPupils();

  let form: HTMLFormElement;

  function create() {
    let data = new FormData(form);
    addPupil(data);
  }

  function remove(id: string) {
    deleteOne(+id);
  }

  function updata(id: string, pupil: any) {
    updataPupil(id, pupil);
  }
  
</script>

<div>
  <div class="flex justify-content-end">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add Pupils
    </button>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">surname</th>
        <th scope="col">group</th>
        <th scope="col">photo</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <!-- svelte-ignore missing-declaration -->
      {#each $pupils as pupil, i}
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{pupil.name}</td>
          <td>{pupil.surname}</td>
          <td>{pupil.group}</td>
          <td>{pupil.photo}</td>
          <td>
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="p-1 mb-2 bg-dark text-white rounded text-decoration-none" on:click={ () => deleteOne(pupil.id) }>Delete</a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Pupil</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <form bind:this={form} action="#" method="post">
        <div class="modal-body">
          <div class="d-flex flex-column gap-3">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Surname"
              name="surname"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Group"
              name="group"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Photo"
              name="photo"
              value="none"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal">Close</button
          >
          <button
            type="submit"
            on:click|preventDefault={create}
            class="btn btn-primary">Save changes</button
          >
        </div>
      </form>
    </div>
  </div>
</div>
