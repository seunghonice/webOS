import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Contents.css';
import Project from './Project'
import ServiceList from './ServiceList'
import Visualization from './Visualization'

class Contents extends Component {
    render() {
        var tabsStyle = {
            defaultIndex: "2"
        }
        return (
            <Tabs className="tabs" defaultIndex={2}>
                <TabList className="tabList">
                    <Tab className="tab" selectedClassName="selectedTab">Project</Tab>
                    <Tab className="tab" selectedClassName="selectedTab">Service List</Tab>
                    <Tab className="tab" selectedClassName="selectedTab">Visualization</Tab>
                </TabList>
             
                <TabPanel className="tabPanel tabPanel1" selectedClassName="selectedPanel">
                    <Project />
                </TabPanel>
                <TabPanel className="tabPanel tabPanel2" selectedClassName="selectedPanel">
                    <ServiceList />
                </TabPanel>
                <TabPanel className="tabPanel tabPanel3"  selectedClassName="selectedPanel">
                    <Visualization />
                </TabPanel>
            </Tabs>
        );
    }

}

export default Contents;
