import {useState} from "react";
import styled from './Tabs.module.scss'
import iconUser from '../../../common/image/icon/IconUser.png'

type FilterTabsType = "PacksList" | "Profile" | 'Null'


export const Tabs = () => {
    const [activeTab, setActiveTab] = useState<FilterTabsType>('Null');

    const handleTabClick = (tabName: FilterTabsType) => {
        if(tabName === 'PacksList') {
            // handleTabClick('Pack List')
            setActiveTab('PacksList')
        } else if (tabName === 'Profile'){
            // handleTabClick('Profile')
            setActiveTab('Profile')
        }
    };


    return (
        <div>
            <div className={styled.tabHeader}>
                <div
                    onClick={()=>handleTabClick('PacksList')}
                    className={activeTab === 'PacksList' ? styled.tabs : styled.tabsOff}
                >
                    <div className={styled.cardIcons}>
                        <div className={styled.iconPackListOne}><span>?</span></div>
                        <div className={styled.iconPackListTwo}><span>!</span></div>
                    </div>
                    <div>
                        <p className={styled.textPackList}>Pack list</p>
                    </div>
                </div>
                <div
                    onClick={()=>handleTabClick('Profile')}
                    className={activeTab === 'Profile' ? styled.tabs : styled.tabsOff}
                >
                    <div className={styled.cardIcons}>
                        <img src={iconUser} alt=""/>
                    </div>
                    <div>
                        <p className={styled.textPackList}>Profile</p>
                    </div>
                </div>

            </div>
            <div className="tab-content">
                {/*{activeTab === 'PacksList' && <p>PackList</p>}*/}
                {/*{activeTab === 'Profile' && <p>Profile</p>}*/}
            </div>
        </div>
    );
}

