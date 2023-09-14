import { useLoaderData, useParams, Link, Form } from "react-router-dom";
import Table from "../Components/Table";
import PageHeader from "../Components/PageHeader";
import { submissionsTableOptions } from "./submissions.jsx";
import { useState, useEffect } from "react";

const { filterColumns = [...filterColumns], highlights, clickables } = submissionsTableOptions
export default function Story() {
  const { storyId } = useParams()
  const { stories } = useLoaderData()
  const storyData = stories.find(row => row.id == storyId)

  return (
    <>
      <div id="page-container">
        <PageHeader super={'Story#' + storyId} heading={storyData.title} url="/story" id={storyId} />
        <div id="page-info-container">
          <div>Wordcount: {storyData.word_count}</div>

        </div>
        <Table
          data={storyData.submissions}
          filterColumns={[...filterColumns, 'story']}
          highlights={highlights}
          clickables={clickables}
          sortByDefault='date_submitted'
          header='Submissions:'
        ></Table>



      </div>
    </>
  )
}