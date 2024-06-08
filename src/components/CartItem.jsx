import React, { useContext } from 'react'
import { useRecoilState } from 'recoil'
import { CartState } from '../atoms/CartState'
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, IconButton, Input, List, ListItem, ListItemPrefix, Tab, Tabs, TabsHeader, Tooltip, Typography } from '@material-tailwind/react'
import { ChevronUpDownIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, UserPlusIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'


const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Local",
    value: "Local",
  },
  {
    label: "International",
    value: "International",
  },
];

const TABLE_HEAD = ["Item", "Price", "Total", ""];

const CartItem = () => {
  const [cart, setCart] = useRecoilState(CartState)

  console.log(cart)

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  return (

    < div className='py-12 md:px-[8%]'>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Cart list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Time to check out your cart
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                view all
              </Button>
              <Link to={'/'}>
                <Button className="flex items-center gap-3" size="sm">
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cart.map(
                (item, index) => {
                  const isLast = index === cart.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={cart.name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={item.image} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal w-[15em] truncate"
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70 w-[20em] truncate"
                            >
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit nemo, dolore ullam, corrupti nobis conse
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.new_price}
                          </Typography>

                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={item.new_price * item.quantity}
                            color="green"
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Delete">
                          <IconButton onClick={() => handleRemove(item.id)} variant="text">
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </CardBody>
        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter> */}
      </Card>
    </div >

  )
}

export default CartItem



// <div className='md:py-24 md:px-44'>

{/* <List className='w-full' >
              <ListItem className='justify-between md:py-10' >
                <ListItemPrefix>
                  <Typography variant="h6" color="blue-gray" className='md:w-[10em] truncate'>
                    Products
                  </Typography>
                </ListItemPrefix>
                  <Typography variant="h6" color="blue-gray" className='md:w-[10em] truncate'>
                  Title
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="md:w-[10em]">
                  Price
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className="md:w-[10em]">
                  Quantity
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className='md:w-[10em] truncate'>
                  Total
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className=' truncate'>
                  Remove
                  </Typography>
              </ListItem>
              <hr className='h-1 border-none bg-[#e2e2e2]'/>
            </List>

    <Card className="w-full">
      {cart.map((item, index) =>(
            <List key={index}>
              <ListItem className='justify-between'>
                <ListItemPrefix>
                  <Avatar variant="circular" alt="candice" src={item.image} />
                </ListItemPrefix>
                  <Typography variant="h6" color="blue-gray" className='w-[10em] truncate'>
                  {item.name}
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    ${item.new_price}
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                  {item.quantity}
                  </Typography>
                  <Typography variant="h6" color="blue-gray" className='w-[10em] truncate'>
                  ${item.quantity * item.new_price}
                  </Typography>
                  <button onClick={()=>handleRemove(item.id)}>
                    <TrashIcon className='size-5 hover:text-red-300'/>
                  </button>
              </ListItem>
              
            </List>
        ))}
    </Card>
      
    // </div> */}
