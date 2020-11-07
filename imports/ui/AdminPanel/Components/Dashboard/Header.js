import React from 'react'
import PanToolIcon from '@material-ui/icons/PanTool';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Badge } from '@material-ui/core';


export default () => {
    return (
        <AppBar position="static" color="default">
            <Tabs
                value={0}
                // onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab icon={
                    <Badge badgeContent={4} color="primary">
                        <PanToolIcon />
                    </Badge>

                } label="All Sign-Ups" />
                <Tab icon={
                    <Badge badgeContent={16} color="primary">
                        <GroupAddIcon />
                    </Badge>
                } label="Pending Confirmation" />
                <Tab icon={
                    <GroupIcon />
                } label="All Active Members" />
            </Tabs>
        </AppBar>
    )
}