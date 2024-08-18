import { useEffect, useMemo, useState } from "react";

const useList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [search, setSearch] = useState("");
  const [editRowId, setEditRowId] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);

  const getData = async () => {
    const url =
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
    try {
      setLoding(true);
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoding(false);
    }
  };

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * limit;
    return filteredData.slice(start, start + limit);
  }, [filteredData, page, limit]);

  const handleEdit = (id) => {
    setEditRowId(id);
  };

  const handleSave = (id, updatedRow) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, ...updatedRow } : item
    );
    setData(updatedData);
    setEditRowId(null);
  };

  const handleDelete = (ids) => {
    const updatedData = data.filter((item) => !ids.includes(item.id));
    setData(updatedData);
  };

  const handleRowSelect = (rowData) => {


    setSelectedRows((prevSelectedRows) => {
      const isSelected = prevSelectedRows.some((row) => row.id === rowData.id);

      if (isSelected) {
        return prevSelectedRows.filter((row) => row.id !== rowData.id);
      } else {
        return [...prevSelectedRows, rowData];
      }
    });
  };

  const handleDeleteSelected = () => {
    const selectedRowIds = selectedRows.map((row) => row.id);

    const updatedData = data.filter((row) => !selectedRowIds.includes(row.id));

    setData(updatedData);

    setSelectedRows([]);
  };

  const handleSelectAllPageRows = (currentPageRows) => {
    setSelectedRows((prevSelectedRows) => {
      const allSelected = currentPageRows.every(row => 
        prevSelectedRows.some(selectedRow => selectedRow.id === row.id)
      );
  
      if (allSelected) {
        return prevSelectedRows.filter(
          (row) => !currentPageRows.some(pageRow => pageRow.id === row.id)
        );
      } else {
        const newSelections = currentPageRows.filter(
          (pageRow) => !prevSelectedRows.some(row => row.id === pageRow.id)
        );
        return [...prevSelectedRows, ...newSelections];
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    loading,
    search,
    setSearch,
    filteredData: paginatedData,
    handleEdit,
    handleDelete,
    handleSave,
    editRowId,
    page,
    setPage,
    limit,
    setLimit,
    totalItems: filteredData.length,
    setData,
    handleRowSelect,
    handleDeleteSelected,
    selectedRows,
    setSelectedRows,
    handleSelectAllPageRows
  };
};

export default useList;
