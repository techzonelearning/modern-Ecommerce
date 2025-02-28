import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { ArrowDown, Delete, Loader, Pencil, Search, Trash } from "lucide-react";
import { doc, deleteDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { product } from "../context/ProductContext";
import { db } from "../firebase/firbase";
import toast from "react-hot-toast";

const TABLE_HEAD = ["Product Name", "Amount", "Category", "Product ID", ""];

export default function ProductsList() {
  let { getProducts, isloading } = useContext(product);
  let [isLoading, setIsLoading] = useState(false);
  async function deleteProduct(prod) {
    setIsLoading(true);
    await deleteDoc(doc(db, "ECommerce", prod.id));
    setIsLoading(false);
    toast.success("Product deleted successfully");
  }
  return (
    <Card className="h-full w-full my-12">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input label="Search" icon={<Search className="h-5 w-5" />} />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <ArrowDown strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-auto px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isloading ? (
              <Loader
                size={30}
                className="animate-spin absolute top-[70%] left-1/2 "
              />
            ) : (
              getProducts.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={item.images[0]}
                          alt="loading..."
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {item.title}
                        </Typography>
                      </div>
                    </td>
                    <td>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.price}
                      </Typography>
                    </td>
                    <td>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.category}
                      </Typography>
                    </td>

                    <td>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {item.id}
                      </Typography>
                    </td>
                    <td>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <Pencil className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      {isLoading ? (
                        <Loader size={25} className="animate-spin" />
                      ) : (
                        <Tooltip content="Delete User">
                          <IconButton
                            variant="text"
                            onClick={() => deleteProduct(item)}
                          >
                            <Trash className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
