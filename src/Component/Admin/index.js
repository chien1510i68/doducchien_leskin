import React from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';

import { data, resourcesData, priorityData } from './data.js';
import { connect } from 'react-redux';

const currentDate = new Date(2020, 2, 2);
const views = ['timelineDay', 'timelineWeek', 'timelineWorkWeek', 'timelineMonth'];
const groups = ['priority'];
    
function IndexAdmin(props){
  let {calendarArr} = props
  
    return (
      <Scheduler
        timeZone="Indochina Time"
        dataSource={data}
        views={views}
        defaultCurrentView="timelineMonth"
        defaultCurrentDate={currentDate}
        height={580}
        groups={groups}
        cellDuration={60}
        firstDayOfWeek={0}
        startDayHour={8}
        endDayHour={20}>
        <Resource
          fieldExpr="ownerId"
          allowMultiple={true}
          dataSource={resourcesData}
          label="Owner"
          useColorAsDefault={ true }
        />
        <Resource
          fieldExpr="priority"
          allowMultiple={false}
          dataSource={priorityData}
          label="Priority"
        />
      </Scheduler>
    );
  }

const mapStateToProps = (state) =>({
  calendarArr : state.calendarArr
})
export default connect(mapStateToProps)(IndexAdmin);
