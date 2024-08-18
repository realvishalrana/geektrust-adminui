import { useTable, useRowSelect, usePagination } from "react-table";
import NoData from "../../icons/NoData";
import React from "react";

const Table = (props) => {
  const {
    columns = [],
    data = [],
    noDataText,
    className,
    loading,
    tableClass = "w-full",
  } = props;

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: {
          pageIndex: 0,
        },
      },
      usePagination,
      useRowSelect
    );

  return (
    <div>
      <div
        className={`${className} bg-white rounded-lg overflow-auto min-h-[490px]`}
      >
        <table className={tableClass} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={headerGroup.id + index}
                    style={column.style}
                    className={`text-xs sm:text-sm px-3 py-3 text-left  text-black visible border-b border-r last:border-r-[#F2F2F2] border-r-white font-bold whitespace-nowrap sticky top-0 z-1`}
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="relative">
            {!loading && page?.length ? (
              page?.map((row) => {
                prepareRow(row);

                return (
                  <tr
                    {...row.getRowProps()}
                    className="border-b last:border-b-0 border-gray"
                  >
                    {row?.cells?.map((cell) => {
                      return (
                        <td
                          className={`relative h-11 text-xs sm:text-sm text-black px-3 py-2 border-b border-gray ${cell.column.className} `}
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  className="relative centered-cell font-bold min-h-96"
                  colSpan={columns?.length}
                >
                  {!loading && (
                    <div className="flex flex-col justify-center items-center">
                      <NoData className="w-48 h-48 text-primary" />
                      <span>{noDataText}</span>
                    </div>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
