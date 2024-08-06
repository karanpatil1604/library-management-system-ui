<script setup>
import { ref } from 'vue'

const book = ref({
  ISBN: null,
  title: '',
  description: '',
  section: null,
  author: null,
  publisher: null,
  num_pages: 0,
  due_days: 0,
  published_date: null
})
</script>
<template>
  <div>
    <div class="row mt-4">
      <div class="offset-3 col-md-6 shadow p-3 rounded">
        <div class="row m-2">
          <h2>Add New Book</h2>
          <hr />
        </div>

        <form class="mt-3 fs-6">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="mb-3">
                <label for="bookTitle" class="form-label">Title</label>
                <input
                  v-model="book.title"
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
                  v-model="book.ISBN"
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
                  <label class="form-label" for="selectSection">Section</label>
                  <select v-model="book.section" class="form-select" id="selectSection">
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
                  <label class="form-label" for="selectAuthor">Author</label>
                  <select v-model="book.author" class="form-select" id="selectAuthor">
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
                  <label class="form-label" for="selectPublisher">Publisher</label>
                  <select v-model="book.publisher" class="form-select" id="selectPublisher">
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
                <label for="numOfPages" class="form-label">No. of Pages</label>
                <input
                  v-model="book.num_pages"
                  type="number"
                  class="form-control"
                  id="numOfPages"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-2">
                <label for="dueTime" class="form-label">Due Days</label>
                <input v-model="book.due_days" type="number" class="form-control" id="dueTime" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-2">
                <label for="publishedDate" class="form-label">Published Date</label>
                <input
                  v-model="book.published_date"
                  type="date"
                  class="form-control"
                  id="publishedDate"
                />
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
