import React, { useMemo } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import CheckBox from "../widgets/CheckBox";
import InputField from "../widgets/Input";

const AdminColumns = ({
  handleEdit,
  handleSave,
  handleDelete,
  editRowId,
  handleRowSelect,
  selectedRows,
  handleSelectAllPageRows,
}) => {
  const columns = useMemo(
    () => [
      {
        id: "selection",
        Header: ({ page }) => {
          const allPageRowsSelected =
            page.length > 0 &&
            page.every((row) =>
              selectedRows.some(
                (selectedRow) => selectedRow.id === row.original.id
              )
            );

          return (
            <CheckBox
              checked={allPageRowsSelected}
              onChange={() =>
                handleSelectAllPageRows(page.map((row) => row.original))
              }
            />
          );
        },
        Cell: ({ row }) => {
          return (
            <CheckBox
              onChange={() => handleRowSelect(row.original)}
              checked={selectedRows.some(
                (selectedRow) => selectedRow.id === row.original.id
              )}
            />
          );
        },
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row: { original } }) => {
          if (original.id === editRowId) {
            return (
              <InputField
                defaultValue={original.name}
                onChange={(e) => (original.name = e.target.value)}
                placeholder="Enter name"
              />
            );
          }
          return original.name;
        },
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: ({ row: { original } }) => {
          if (original.id === editRowId) {
            return (
              <InputField
                type="email"
                defaultValue={original.email}
                onChange={(e) => (original.email = e.target.value)}
                placeholder="Enter email"
              />
            );
          }
          return original.email;
        },
      },
      {
        Header: "Role",
        accessor: "role",
        Cell: ({ row: { original } }) => {
          if (original.id === editRowId) {
            return (
              <InputField
                defaultValue={original.role}
                onChange={(e) => (original.role = e.target.value)}
                placeholder="Enter role"
              />
            );
          }
          return original.role;
        },
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row: { original } }) => {
          if (original.id === editRowId) {
            return (
              <div className="flex gap-2">
                <button
                  className="save-button"
                  onClick={() => handleSave(original.id, original)}
                >
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={() => handleEdit(null)}
                >
                  Cancel
                </button>
              </div>
            );
          }
          return (
            <div className="flex gap-2">
              <span
                id="edit"
                className="text-primary cursor-pointer edit"
                onClick={() => handleEdit(original.id)}
              >
                <EditIcon className="w-6 h-6 text-black" />
              </span>
              <span
                id="delete"
                className="text-primary cursor-pointer delete"
                onClick={() => handleDelete(original.id)}
              >
                <DeleteIcon className="w-6 h-6" />
              </span>
            </div>
          );
        },
      },
    ],
    [handleDelete, handleEdit, handleSave, editRowId, selectedRows]
  );

  return { columns };
};

export default AdminColumns;
