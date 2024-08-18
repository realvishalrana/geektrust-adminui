import React from "react";
import AdminColumns from "./column";
import useList from "../hooks/useList";
import SearchBar from "../widgets/Input/searchBar";
import Table from "../widgets/Table";
import Pagination from "./pagination";

const UserIndex = () => {
  const {
    filteredData,
    loading,
    search,
    setSearch,
    handleEdit,
    handleSave,
    handleDelete,
    editRowId,
    page,
    limit,
    setPage,
    totalItems,
    handleRowSelect,
    selectedRows,
    handleDeleteSelected,
    setSelectedRows,
    handleSelectAllPageRows,
  } = useList();

  return (
    <div className="space-y-2 m-2">
      <SearchBar
        value={search}
        containerClass="px-2"
        message="Search by name, email or role"
        onChange={(e) => setSearch(e.target.value)}
        setSearchValue={setSearch}
      />
      <Table
        data={filteredData}
        columns={
          AdminColumns({
            handleEdit,
            handleSave,
            handleDelete,
            editRowId,
            handleRowSelect,
            selectedRows,
            setSelectedRows,
            handleSelectAllPageRows,
          }).columns
        }
        loading={loading}
        tableClass="w-full overflow-auto"
        className="min-h-fit"
        noDataText="No Data Found"
      />
      <Pagination
        page={page}
        limit={limit}
        totalItems={totalItems}
        onPageChange={setPage}
      />
      <button
        className="bg-red text-white px-4 py-2 rounded-full disabled:opacity-50"
        onClick={handleDeleteSelected}
        disabled={selectedRows.length <= 0}
      >
        Delete Selected
      </button>
    </div>
  );
};

export default UserIndex;
