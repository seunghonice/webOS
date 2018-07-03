import React, { Component } from 'react';
import './ServiceList.css';
import Table from "react-table";

class ServiceList extends Component {
    render() {
        const data = [{
            serviceName: 'appInstallService',
            serviceType: 'Native Service',
            // allowedName: [{'name1':'com.webos.appInstallService'}, {'name2':'com.webos.install'}],
            // api: [{'com.webos.appInstallService': 'a, b, c', 'com.webos.install': 'a, b, d'}],
            // bound: [{'inbound': '*', 'outbound': '*'}],
            permission: ''
        }]
        const columns = [{
            Header: 'ServiceName',
            accessor: 'serviceName'
        }, {
            Header: 'ServiceType',
            accessor: 'serviceType',
        }, {
            Header: 'AllowedName',
            accessor: 'allowedName',
        }, {
            Header: 'API',
            accessor: 'api',
            
        }, {
            Header: 'Bound',
            accessor: 'bound',
        }, {
            id: 'permission',
            Header: 'permission',
        }]
        return (
            <Table 
                data = {data}
                columns = {columns}
            />
        );
    }
}

export default ServiceList;
