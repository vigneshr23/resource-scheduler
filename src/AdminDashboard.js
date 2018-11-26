import React, { Fragment } from "react";
import TaskPanel from "../common/TaskPanel";
import Grid from "./../common/Grid";
import Search from "./../common/Search";
import withTasks from "./../hoc/TasksHOC";
import { getDate, format } from "./../../utils/dateUtils";
import CustomersData from "./../hoc/CustomersData";
import { getCustomerColumns } from "./../../constants/gridColumns";
import FullCalendar from 'fullcalendar-reactwrapper';
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
// import whyDidYouUpdate from 'why-did-you-update'; whyDidYouUpdate(React)

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import profileIcon from "./../../assets/images/profile.svg";
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const DashboardOverview = ({ match, tasks,history }) => {
  const date_today = getDate();
  const today_tasks = tasks.filter(
    task =>
      format(task.date_time, "MM-DD-YYYY", "MM-DD-YYYY hh:mm A") === date_today
  );
  const weekly_tasks = tasks.filter(
    task =>
      format(task.date_time, "MM-DD-YYYY", "MM-DD-YYYY hh:mm A") !== date_today
  );
  const { url } = match;
  const actions = [
    {
      getURL: ({ customer_id }) => `${url}/customer/${customer_id}`,
      label: "Select"
    }
  ];
  const dashboardCustomerColumns = getCustomerColumns(actions);

  const events = [
    {
      id: 1,
      title: 'Walter White',
      url: 'http://localhost:3000/contractor/maintenance/customer/7',
      start: '2018-06-01T10:30:00',
      end: '2018-05-01T12:30:00',
      color: '#bfabde'
    },
    {
      id: 2,
      title: 'Klay Thompson',
      url: 'http://localhost:3000/contractor/maintenance/customer/4/25/add',
      start: '2018-06-06',
      end: '2018-06-09',
      color: '#ff9956'
    },
    {
      id: 3,
      title: 'Bill Hunter',
      url: 'http://localhost:3000/contractor/service/customer/3/4/add',
      start: '2018-06-08T16:00:00',
      color: '#59C4BF'
    },
    {
      id: 4,
      title: 'Bill Hunter',
      url: 'http://localhost:3000/contractor/service/customer/9/43/add',
      start: '2018-06-11',
      color: '#59C4BF'
    },
    {
      id: 5,
      title: 'John Wick',
      url: 'http://localhost:3000/contractor/maintenance/customer/6/11/add',
      start: '2018-06-20T16:00:00',
      color: '#6F8036'
    },
    {
      id: 6,
      title: 'John jackson',
      url: 'http://localhost:3000/contractor/maintenance/customer/6/11/add',
      start: '2018-06-28T16:00:00',
      color: '#f13f77'
    },
    {
      id: 7,
      title: 'John Wick',
      url: 'http://localhost:3000/contractor/maintenance/customer/6/11/add',
      start: '2018-06-03T16:00:00',
      color: '#6F8036'
    },
    {
      id: 8,
      title: 'Klay Thompson',
      url: 'http://localhost:3000/contractor/maintenance/customer/4/25/add',
      start: '2018-06-25',
      color: '#ff9956'
    },
    {
      id: 9,
      title: 'Walter White',
      url: 'http://localhost:3000/contractor/maintenance/customer/7',
      start: '2018-06-25T16:00:00',
      end: '2018-06-26T16:00:00',
      color: '#bfabde'
    }
  ];

  const bigCalendarEvents = [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2018, 3, 0),
      end: new Date(2018, 3, 1),
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2018, 3, 7),
      end: new Date(2018, 3, 10),
    },

    {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2018, 2, 13, 0, 0, 0),
      end: new Date(2018, 2, 20, 0, 0, 0),
    },

    {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2018, 10, 6, 0, 0, 0),
      end: new Date(2018, 10, 13, 0, 0, 0),
    },

    {
      id: 4,
      title: 'Some Event',
      start: new Date(2018, 3, 9, 0, 0, 0),
      end: new Date(2018, 3, 9, 0, 0, 0),
    },
    {
      id: 5,
      title: 'Conference',
      start: new Date(2018, 3, 11),
      end: new Date(2018, 3, 13),
      desc: 'Big conference for important people',
    },
    {
      id: 6,
      title: 'Meeting',
      start: new Date(2018, 3, 12, 10, 30, 0, 0),
      end: new Date(2018, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
      id: 7,
      title: 'Lunch',
      start: new Date(2018, 3, 12, 12, 0, 0, 0),
      end: new Date(2018, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
    },
    {
      id: 8,
      title: 'Meeting',
      start: new Date(2018, 3, 12, 14, 0, 0, 0),
      end: new Date(2018, 3, 12, 15, 0, 0, 0),
    },
    {
      id: 9,
      title: 'Happy Hour',
      start: new Date(2018, 3, 12, 17, 0, 0, 0),
      end: new Date(2018, 3, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
    },
    {
      id: 10,
      title: 'Dinner',
      start: new Date(2018, 3, 12, 20, 0, 0, 0),
      end: new Date(2018, 3, 12, 21, 0, 0, 0),
    },
    {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2018, 3, 13, 7, 0, 0),
      end: new Date(2018, 3, 13, 10, 30, 0),
    },
    {
      id: 12,
      title: 'Late Night Event',
      start: moment('06-11-2018 7:20 AM', "MM-DD-YYYY hh:mm A").toDate(),
      end: moment('06-11-2018 9:20 AM', "MM-DD-YYYY hh:mm A").toDate(),
    },
    {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2018, 5, 20, 19, 30, 0),
      end: new Date(2018, 5, 22, 2, 0, 0),
    },
    {
      id: 14,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 2)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
  ];

  let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

  return (
    <Fragment>
      <div className="row-container">
        <div
          style={{
            width: "75%",
            marginRight: "1rem"
          }}
        >
          <div className="global-label">Overview</div>
          <CustomersData>
            {(customers, delegate) => (
              <Fragment>

                <div id="example-component">
                  {/* <FullCalendar
                    id="your-custom-ID"
                    schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
                    header={{
                      left: 'prev,next today myCustomButton',
                      center: 'title',
                      right: 'month,basicWeek,basicDay'
                    }}
                    defaultDate={new Date()}
                    navLinks={true} // can click day/week names to navigate views
                    editable={false}
                    eventLimit={true} // allow "more" link when too many events
                    events={events}
                    eventClick={(eventObj) => {console.log(eventObj)}}
                  /> */}

                  {/* <BigCalendar
                    events={bigCalendarEvents}
                    style={{height: '700px'}}
                    defaultDate={new Date()}
                  /> */}
<BigCalendar
      selectable
      events={bigCalendarEvents}
      scrollToTime={new Date()}
      defaultDate={new Date()}
      style={{height: '700px'}}
      onSelectEvent={event => history.push("/")}
      onSelectSlot={slotInfo =>
        <div>{slotInfo.action}</div>
      }
    />
                </div>

              </Fragment>
            )}
          </CustomersData>
        </div>
        <hr className="divider-vertical" />
        <div className="task-panel">
          <div>
            <div className="task-header">
              Completed Today ({today_tasks.length})
            </div>
            <div>
              {today_tasks.map((data, index) => {
                return <TaskPanel key={index} task={data} />;
              })}
            </div>
          </div>

          <div>
            <div className="task-header">
              Completed last 7 days ({weekly_tasks.length})
            </div>
            <div>
              {weekly_tasks.map((data, index) => {
                return <TaskPanel key={index} task={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withTasks(DashboardOverview);
