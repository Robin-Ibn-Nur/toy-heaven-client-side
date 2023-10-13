import React, { useCallback } from "react";
import { User, Chip, Tooltip } from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import SearchAndTable from "./SearchAndTable";
import { useNavigate } from "react-router-dom";

const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};
const AllToys = () => {
    const nevigate = useNavigate();
    const handleDetails = (id) => {
        nevigate(`/toy/${id}`)
        console.log("Details of item with id:", id);
    };


    const renderCell = useCallback((data, columnKey) => {
        const cellValue = data[columnKey];
        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: data?.photo }}
                        description={data?.toyName}
                        name={cellValue}
                    >
                        {data?.email}
                    </User>
                );
            case "category":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        {/* <p className="text-bold text-sm capitalize text-default-400">{data?.category}</p> */}
                    </div>
                );
            case "price":
                return (
                    <Chip className="capitalize" color={statusColorMap[data?.quantity]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "quantity":
                return (
                    <Chip className="capitalize" color={statusColorMap[data?.price]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details">
                            <span
                                onClick={() => handleDetails(data._id)}

                                className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip onClick={handleDetails} content="Edit user">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <SearchAndTable renderCell={renderCell} />
    );
};




export default AllToys;