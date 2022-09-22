import {classNames} from "shared/libs/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?:string
}

export const Sidebar = ({className}:SidebarProps) => {
    const [collapsed,setCollapsed] = useState(false)

    const onToggle = () => setCollapsed(prev=>!prev)

    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>
         <button onClick={onToggle}>Toggle1</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

