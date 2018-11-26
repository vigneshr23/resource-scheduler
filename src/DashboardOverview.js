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

const DashboardOverview = ({ match, tasks }) => {
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
      title: 'Service Call',
      url: 'http://localhost:3000/contractor/maintenance/customer/7',
      start: '2018-05-01T10:30:00',
      end: '2018-05-01T12:30:00'
      
    },
    {
      title: 'Long Event',
      start: '2018-05-07',
      end: '2018-05-10',
      color: '#ff6600'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: '2018-05-09T16:00:00',
      borderColor: '#ff6600',
      backgroundColor: '#efac80'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: '2018-05-16T16:00:00'
    },
    {
      title: 'Conference',
      start: '2018-05-11',
      end: '2018-05-13'
    },
    {
      title: 'All Day Event',
      start: '2018-05-12'
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2018-05-28'
    }
  ];

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
                <Search placeholder="Search by customer name" {...delegate} />
                {/* <Grid
                  style={{
                    borderRadius: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    margin: "0 -1rem 0 -2rem"
                  }}
                  columns={dashboardCustomerColumns}
                  data={customers}
                  defaultPageSize={8}
                /> */}

                <div id="example-component">
                  <FullCalendar
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
