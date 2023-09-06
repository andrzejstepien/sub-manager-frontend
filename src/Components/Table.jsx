import Badges from "./Badges"
import { useState } from "react"
import { renderClassNames } from "../functions/utilities.mjs"
import { DateTime } from "luxon"
import { Link } from "react-router-dom"
import { cloneDeep } from "lodash"
export default function Table(props) {
  const filterList = props?.filterList ?? []
  const sort = (data,sortBy) => {
    const isDate = (str) =>{
        if(str && DateTime.fromFormat(str,'yyyy-MM-dd').isValid){
          console.log("found a date!")
            return true
        }
        return false
    }
        const key = sortBy.sortBy
        return data.sort((a, b) => {
          const determineSortValue = (val) => {
            if(val===null){return 253370761200000}
            if(typeof val === 'number'){return val}
            if(isDate(val)){return DateTime.fromFormat(val,'yyyy-MM-dd').valueOf()}
            return val
          }
          const valueA = determineSortValue(a[key])
          const valueB = determineSortValue(b[key])
          if (valueA < valueB) {
            return sortBy.isAscending ? -1 : 1
          }
          if (valueA > valueB) {
            return sortBy.isAscending ? 1 : -1
          }
          return 0
        })
      
 
    
  }
  const data = cloneDeep(props?.data)
  .map(e=>{
    for (const filter of filterList) {
      delete e[filter]
    }
    return e
  }) ?? []

  if (data.length === 0) { return <p>Nothing to see here...</p> }

  const [sortBy, setSortBy] = useState({
    sortBy: props.sortByDefault??Object.keys(data[0])[0],
    isAscending: false
  })
  sort(data,sortBy)

  const renderHeaders = (data) => {
    const changeSortBy = (key) => {
      if (sortBy.sortBy === key) {
        setSortBy(prev => {
          return {
            ...prev,
            isAscending: !prev.isAscending
          }
        })
      } else {
        setSortBy(prev => {
          return {
            isAscending:false,
            sortBy: key
          }
        })
      }
    }
    return <tr className="rowHeader">
      {Object.keys(data[0]).map((heading, i) => {
        const isSortable = () => {
          if(data[0][heading]&&typeof data[0][heading] === 'object'){
            return false}
          return true
        }
        const renderArrows = (key) =>{
          if(sortBy.sortBy===key){
            return sortBy.isAscending?"\u2191":"\u2193"
          }
          return"\u2002"
        }
        const capitalisedHeading = heading.slice(0,1).toUpperCase()+heading.slice(1)
        return <th key={heading + i}><button onClick={isSortable()?() => { changeSortBy(heading) }:()=>{}}>{renderArrows(heading)+" "+capitalisedHeading+" "+renderArrows(heading)}</button></th>
      })}
    </tr>
  }

  const renderCell = (key, row, rowIndex, colIndex, fn) => {
    const Cell = (props) => {
      return <td key={row[key] + rowIndex + colIndex}>{props.children}</td>
    }
    const contents = row[key]
    if (Array.isArray(contents)) {
      if (typeof contents[0] === 'object') {
        return <Cell><Table data={contents} setFocus={props.setFocus} /></Cell>
      }
      return <Cell><Badges data={contents} setFocus={props.setFocus} /></Cell>
    }
  const getOriginalRowByID = (array,row) => {
    return array.find(e=>e?.id===row?.id) 
  }
    if(props?.clickables?.find(e=>e[0]===key)){
      const index = props.clickables?.findIndex(row=>row[0]==key)
      return <Cell><Link to={props.clickables[index][1](getOriginalRowByID(props?.data,row))}>{contents}</Link></Cell>
    }

    if (props?.links?.includes(key)) {
      return <Cell><a href={contents}>{contents}</a></Cell>
    }
    // if (key === "Days Out") {
    //   return <Cell>{row['Days Out']} </Cell>
    // }
    return <Cell>{contents}</Cell>
  }
  const oddOrEven = (n) => {
    return ["evenRow", "oddRow"][n % 2]
  }
  const renderRows = (data) => {
    return data.map((row, rowIndex) => {
      const cells = Object.keys(row).map((key, colIndex) => {
        return <>{renderCell(key, row, rowIndex, colIndex)}</>
      })
      const isHighlight = (array, row) => {
        if (!array || !row) { return false }
        return array.some(e => row[e[0]] === e[1])
      }
      const classNames = [
        `row ${oddOrEven(rowIndex)} `,
        isHighlight(props?.highlights, row) ? 'highlight' : "",
        //row['Query After'] - row['Days Out'] < 0 && row['Responded'] === '-' ? "alert" : ""
      ]
      return <tr key={row.id} className={renderClassNames(classNames)}>{cells}</tr>
    })
  }
  
  return <table>
    <tbody>
      {renderHeaders(data)}
      {renderRows(data)}
    </tbody>
  </table>






}

