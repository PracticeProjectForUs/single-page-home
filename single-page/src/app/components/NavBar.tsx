'use client';
import DropdownMenu from '@/app/(shareComponents)/(dropdown)/DropdownMenu';
import { Button, Popover, Dropdown } from 'antd';
import type { MenuProps } from 'antd';



export default function NavBar() {

  return (
    <nav className='flex h-16 items-center'>
      <div className='flex justify-center w-1/12'>
        <img 
          src="/images/logo/v-1.png" 
          alt="logo" 
          className="w-[50px]" />
      </div>
      <ul className="flex w-4/6 gap-8">
         <li><a href="#">Model</a></li>
         <li><a href="#">Works and opinions</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Contact</a></li>
        <DropdownMenuList/>
      </ul>
      <div className='w-1/6 flex flex-row gap-2'>
        <MoreProducts/>
        <UserInfo/>
      </div>
    </nav>
  );
}



function MoreProducts() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <Popover content={content} title="Title">
      <Button className="!h-12 !shadow-sm !rounded-lg !text-neutral-500 group">
        <i className="icon-grid text-lg relative group-hover:text-blue-500" />
      </Button>
    </Popover>
  )
}





interface MenuItemDropdown {
  key: string;
  label: JSX.Element;
  icon?: JSX.Element;
  disabled?: boolean;
}


function DropdownMenuList(){
  const items: MenuItemDropdown[] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Option 1
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Option 2
        </a>
      ),
    },
  ];

  return(
    <div className='hover:cursor-pointer'>
      <DropdownMenu items={items} title="More" />
    </div>
  )
}


function UserInfo() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'My Account',
    },
    {
      key: '2',
      label: 'Logout',
    },
  ];

  return(
    <Dropdown
      menu={{ items }}
      placement="bottomRight"
      dropdownRender={() => <DropdownContent />}
    >
       <Button className="!h-12 !shadow-sm !rounded-lg !px-4 !font-serif text-sm">
                <div className="flex gap-6 max-w-56">
                    <div className="flex items-center gap-2 truncate">
                        <div className="flex items-center justify-center bg-red-500 rounded-full w-6 h-6 text-sm text-white">J</div>
                        <p className="truncate max-w-28">John Doe</p>
                    </div>
                    <i className="icon-chevron-down text-sm relative top-0.5" />
                </div>
            </Button>
    </Dropdown>
      
  )
}


function DropdownContent() {
  return (
    <div className="flex flex-col gap-4 bg-white w-72 p-4 shadow-md rounded-lg ">
            <DropdownHeader />
            <DropdownList />
            <DropdownFooter />
    </div>
  )
}


function DropdownHeader() {
  return (
    <div className="flex flex-col px-3 pt-4 pb-2 gap-4 justify-center items-center">
        <div className="flex flex-col gap-0.5 items-center">
            <p className="text-lg font-semibold whitespace-nowrap text-center ">John Doe</p>
            <p className="text-base whitespace-nowrap text-center ">john@doe</p>
        </div>
    </div>
)
}

function DropdownList() {
  return (
    <div className="border rounded-lg w-full">

        <div className=" h-2/4 p-1 border-b rounded-lg rounded-b-none">

            <button onClick={() => alert('contact')} className=" p-3 flex justify-start items-center text-base w-full h-full rounded-lg hover:text-primary hover:bg-rose-100 transition-colors duration-500  ">
                <div className="flex gap-2 items-center">
                    <i className="icon-contact text-lg" />
                    <p className="">Contact As</p>
                </div>
            </button>
        </div>

        <div className=" h-2/4 p-1">
            <button className=" p-3 flex justify-start items-center text-base w-full h-full rounded-lg hover:text-primary hover:bg-rose-100 transition-colors duration-500 ">
                <div className="flex gap-2 items-center">
                    <i className="icon-exit text-lg" />
                    <p className="">Logout</p>
                </div>
            </button>
        </div>
    </div>

)
}


function DropdownFooter() {
  return (
      <p className=" flex justify-center items-center text-base">© 2024 Home Build</p>
  )
}