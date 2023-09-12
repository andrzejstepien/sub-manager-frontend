import { useLoaderData, useParams, Link, Form } from "react-router-dom";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";
import { submissionsTableOptions } from "./submissions.jsx";
import { useState, useEffect } from "react";

const { filterList = [...filterList], highlights, clickables } = submissionsTableOptions
export default function Story() {
  const { storyId } = useParams()
  const { stories } = useLoaderData()
  const storyData = stories.find(row => row.id == storyId)

  return (
    <>
      <div id="page-container">
        <PageHeader super={'Story#' + storyId} heading={storyData.title} url="/story" id={storyId}/>
        <div>Wordcount: {storyData.word_count}</div>
        <Table
          data={storyData.submissions}
          filterList={[...filterList, 'story']}
          highlights={highlights}
          clickables={clickables}
          sortByDefault='date_submitted'
          header='Submissions:'
        ></Table>

        <Form
          method="post"
          action="delete"
          onSubmit={(event) => {
            if (
              !confirm(
                "Please confirm you want to delete this record."
              )
            ) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit">Delete</button>
        </Form>
        <Form>
           <Link to={`/story/${storyData.id}/edit`}>EDIT</Link>
        </Form>
      </div>
    </>
  )
}