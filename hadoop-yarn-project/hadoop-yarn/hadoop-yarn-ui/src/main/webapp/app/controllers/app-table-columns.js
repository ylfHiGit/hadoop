/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import Ember from 'ember';
import ColumnDef from 'em-table/utils/column-definition';

export default Ember.Controller.extend({
    columns: function() {
        var colums = [];
        colums.push({
            id: 'appId',
            headerTitle: 'Application ID',
            contentPath: 'id',
            cellComponentName: 'em-table-linked-cell',
            getCellContent: function(row) {
              return {
              displayText: row.id,
              routeName: 'yarn-app',
              id: row.id
              };
            },
            minWidth: "250px"
        }, {
            id: 'appType',
            headerTitle: 'Application Type',
            contentPath: 'applicationType',
        }, {
            id: 'appName',
            headerTitle: 'Application Name',
            contentPath: 'appName',
        }, {
            id: 'appUsr',
            headerTitle: 'User',
            contentPath: 'user',
            minWidth: "50px"
        }, {
            id: 'queue',
            headerTitle: 'Queue',
            contentPath: 'queue',
        }, {
            id: 'state',
            headerTitle: 'State',
            contentPath: 'state',
            cellComponentName: 'em-table-status-cell',
            minWidth: "50px"
        }, {
            id: 'progress',
            headerTitle: 'Progress',
            contentPath: 'progress',
            cellComponentName: 'em-table-progress-cell',
            cellDefinition: {
              valueMax: 100
             },
        }, {
            id: 'stTime',
            headerTitle: 'Start Time',
            contentPath: 'startTime',
        }, {
            id: 'elTime',
            headerTitle: 'Elapsed Time',
            contentPath: 'elapsedTime',
            cellDefinition: {
              type: "duration"
            }
        }, {
            id: 'finishTime',
            headerTitle: 'Finished Time',
            contentPath: 'validatedFinishedTs',
            observePath: true
        }, {
            id: 'priority',
            headerTitle: 'Priority',
            contentPath: 'priority',
        }, {
            id: 'cluster',
            headerTitle: '%Cluster',
            contentPath: 'clusterUsagePercentage',
            observePath: true
        });
        return ColumnDef.make(colums);
    }.property()
});
