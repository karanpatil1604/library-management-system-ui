<script setup></script>
<template>
  <div>
    <div class="row mt-4">
      <div class="offset-3 col-md-6">
        <div class="row">
          <h2>Add New Book</h2>
        </div>

        <form class="mt-3 fs-6">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="mb-3">
                <label for="bookTitle" class="form-label">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="bookTitle"
                  aria-describedby="bookTitleHelp"
                  placeholder="Fault in our stars"
                />
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="mb-3">
                <label for="ISBN" class="form-label">ISBN</label>
                <input
                  type="text"
                  class="form-control"
                  id="ISBN"
                  aria-describedby="isbnHelp"
                  placeholder="125458695784"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-6">
              <label for="bookContent" class="form-label">Cover Image</label>
              <div class="input-group mb-3">
                <input
                  type="file"
                  class="form-control"
                  id="coverImage"
                  aria-describedby="coverImageHelp"
                  aria-label="upload cover"
                />
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <label for="bookContent" class="form-label">Book Content</label>
              <div class="input-group mb-3">
                <input
                  type="file"
                  class="form-control"
                  id="bookContent"
                  aria-describedby="bookContentHelp"
                  placeholder="doe"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="mb-3">
                <div class="">
                  <label class="form-label" for="inputGroupSelect01">Section</label>
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Select section...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <div class="">
                  <label class="form-label" for="inputGroupSelect01">Author</label>
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Choose authors...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <div class="">
                  <label class="form-label" for="inputGroupSelect01">Publisher</label>
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Choose Publisher...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-4">
              <div class="mb-2">
                <label for="passwork1" class="form-label">No. of Pages</label>
                <input type="number" class="form-control" id="numOfPages" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-2">
                <label for="dueTime" class="form-label">Due Days</label>
                <input type="number" class="form-control" id="dueTime" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-2">
                <label for="publishedDate" class="form-label">Published Date</label>
                <input type="date" class="form-control" id="publishedDate" />
              </div>
            </div>
          </div>

          <div class="text-start d-flex flex-column gap-1 w-100">
            <button type="submit" class="btn btn-success">Add Book</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
