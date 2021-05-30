import React, {useState, useEffect, useMemo} from 'react';

import { Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { useTable, useSortBy } from "react-table"

import {firestore} from '../firebase'

//import Table from "./Table";

function MealListDisplay(props) {
    const[data, setData] = useState([]);

    const columns = React.useMemo(() =>[
        {
            Header: "Name",
            accessor:"Name"
        }, 
        {
            Header: "Calories",
            accessor:"Calories",
            isNumeric: true
        }, 
        {
            Header: "Protein",
            accessor:"Protein",
            isNumeric: true
        }, 
        {
            Header: "Carbohydrates",
            accessor: "Carbohydrates",
            isNumeric: true
        },
        {
            Header: "Fat",
            accessor: "Fat",
            isNumeric: true
        }
    ], []);
    
    useEffect(() => {
        var ref = firestore.collection("Meals").orderBy("Calories");
        ref.get()
        .then((querySnapshot)=> {
            /**
            querySnapshot.forEach((doc) => {
                console.log(doc.id, "=>", doc.data());
                setData(data.push(doc.data()));
                console.log(data)

            }); */

            const data = querySnapshot.docs.map (doc => doc.data());
            console.log(data);
            setData(data);
        })
        .catch((error) => {
            console.log("error getting documents");
        })
    }, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data}, useSortBy)
    
    

    return (
        <div>
          <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render("Header")}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>  
    </div>
        /** 
        !data.length ? (
        <div>Loading.. {data.length}</div>) : (<div className="App">
        <Table columns={columns} data={data} />
        </div> */
);

    
}

export default MealListDisplay;