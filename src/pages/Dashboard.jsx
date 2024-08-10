import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";
import SearchBox from "../components/SearchBox";
import SelectDelete from "../components/SelectDelete";
import EditUserDetails from "../components/EditUserDetails";


const API_URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [columns, setColumns] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRow, setSelectedRow] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editRowData, setEditRowData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      const column = Object.keys(response.data[0]);
      setColumns(column);
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.log("Error in fetching Details:", error);
    }
  };

  const selectHandlePage = (SelectedPage) => {
    if (
      SelectedPage >= 1 &&
      SelectedPage <= users.length / 10 + 1 &&
      SelectedPage != page
    ) {
      setPage(SelectedPage);
    }
  };

  const handleInputSearch = (e) => {
    const inputData = e.target.value.toLowerCase();
    setSearch(inputData);
    const filteredData = users.filter(
      (user) =>
        user.id.toLowerCase().includes(inputData) ||
        user.name.toLowerCase().includes(inputData) ||
        user.email.toLowerCase().includes(inputData) ||
        user.role.toLowerCase().includes(inputData)
    );
    setFilteredUsers(filteredData);
  };
  // console.log("User Search :",filteredUsers);

  const handleDelete = (id) => {
    if (!selectedRow.includes(id)) {
      toast.error("Please select the row to delete.");
      return;
    }
    setFilteredUsers((prevUser) => prevUser.filter((user) => user.id !== id));
    toast.error("Deleted Successfully!");
  };

  const handleUserEdit = (id) => {
    const editUser = filteredUsers.find((user) => user.id === id);
    setEditRowData(editUser);
    setIsModalOpen(true);
  };

  const handleUpdate = (id, newData) => {
    // const event = e.target.value;
    setUsers((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name: newData } : item))
    );
  };

  const handleSelectedAllRow = (event) => {
    const { checked } = event.target;
    const allRowsId = currentUser.map((user) => user.id);
    console.log("All rows Ids are :", allRowsId);

    if (checked && selectedRow.length !== allRowsId.length) {
      setSelectedRow(allRowsId);
      toast.warn("Hey You Selected All !", {
        position: "top-center",
        theme: "dark",
      });
    } else {
      setSelectedRow([]);
    }
  };

  const handleSelectedRow = (event, id) => {
    const { checked } = event.target;

    if (checked) {
      setSelectedRow((prevSelectedRow) => [...prevSelectedRow, id]);
    } else {
      setSelectedRow((prevSelectedRow) =>
        prevSelectedRow.filter((rowId) => rowId != id)
      );
    }
  };

  const currentUser = users.slice(page * 10 - 10, page * 10);
  // console.log("Current User:", currentUser);

  const handleDeleteSelectedRows = () => {
    const updatedUsers = users.filter((user) => !selectedRow.includes(user.id));
    // console.log("Updated User :", updatedUsers);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedRow([]);
    toast.success("Deleted Successfully!");
  };

  return (

    <div className="w-full h-auto flex flex-col">
      <div className="container h-auto mx-auto ">
        <SearchBox search={search} handleInputSearch={handleInputSearch} />
        <UserTable
          users={users}
          columns={columns}
          page={page}
          filteredUsers={filteredUsers}
          selectedRow={selectedRow}
          handleSelectedAllRow={handleSelectedAllRow}
          handleSelectedRow={handleSelectedRow}
          handleDelete={handleDelete}
          handleUserEdit={handleUserEdit}
        />
      </div>
      {/*  Pagination Buttons Start Here  */}
      <div className="w-full flex items-center justify-evenly">
        <SelectDelete
          selectedRow={selectedRow}
          handleDeleteSelectedRows={handleDeleteSelectedRows}
        />
        <Pagination
          users={users}
          page={page}
          selectHandlePage={selectHandlePage}
        />
        {/* Pagination Buttons End Here */}
      </div>
      {isModalOpen && (
        <EditUserDetails
          editRowData={editRowData}
          setIsModalOpen={setIsModalOpen}
          handleUpdate={handleUpdate}
          users={users}
          setEditRowData={setEditRowData}
        />
      )}
    </div>

  );
}

export default Dashboard;
