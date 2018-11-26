import React from 'react'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import events from '../events'
import moment from 'moment'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

//import dates from '../../src/utils/dates' 

const resourceMap = [
  { resourceId: 1, resourceTitle: 'James' },
  { resourceId: 2, resourceTitle: 'Gerrard' },
  { resourceId: 3, resourceTitle: 'Patel' },
  { resourceId: 4, resourceTitle: 'Jackson' },
  { resourceId: 5, resourceTitle: 'Dwayne' },
]

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

//let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
//let allViews = ['day', 'work_week']

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        events:events, 
        isAddModalOpen: false,
        isEditModalOpen: false,
    };
    this.moveEvent = this.moveEvent.bind(this);
  }

  handleViewChange = () => {
    console.log("view chagned");
    //console.log(event);
    // try diff data for diff views
  }
  drillDownHandler = () => {
    console.log("drill down events");
    // need to figure out.
  }
  toggleAddModal = event => {
    if (!this.state.isEditModalOpen) {
      this.setState({
        currentEvent: event,
        isAddModalOpen: !this.state.isAddModalOpen,
      });
    }
  }
  handleSelect = ({ start, end, slots, action, e }) => {
    const title = window.prompt('New Event name')
    const resourceId = parseInt(window.prompt('resourseId? ')) 
     if (title) {
        let events = this.state.events;
        events.push({
            id: (this.state.events[this.state.events.length-1].id)+1,
            start,end,title,resourceId
        })
        this.setState({
        // events: [
        //   ...this.state.events,
        //   {
        //     start,
        //     end,
        //     title,
        //   },
        // ],
        events
        })
        console.log(this.state)
    }
  }
  showEvent = (event) => {
      alert(`This is a ${event.title} Event,\n Desc: ${event.desc}`);
      if(!this.state.isEditModalOpen)
        this.setState({
            isEditModalOpen: !this.state.isEditModalOpen
        })
  }
  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }
  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    console.log(event);
    console.log(this.state);
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }
  getResource = (resources) => {
    console.log()
  }
  dayViewUpdate = (date) => {
    console.log(date);
    
  }
  

  render() {
    const localizer = BigCalendar.momentLocalizer(moment)
    //const { classes, toolbarVisible, defaultView } = this.props; 
    
    return(
      <div className="big-calendar">
        {/* <BigCalendar
          events={this.state.events}
          views={allViews}
          step={60}
          //showMultiDayTimes
          //max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
          selectable
          // resizable
          defaultView={BigCalendar.Views.WEEK}
          defaultDate={new Date()}
          localizer={localizer}
          resources={resourceMap}
          resourceIdAccessor="resourceId"
          resourceTitleAccessor="resourceTitle"
          onView={this.handleViewChange}
          onDrillDown={this.drillDownHandler}
          onSelectSlot={this.handleSelect}
          onSelectEvent={this.showEvent}
          dayPropGetter={this.dayViewUpdate}
          startAccessor="start"
          endAccessor="end"
        /> */}

        <DragAndDropCalendar
          events={this.state.events}
          localizer={localizer}
          defaultView={BigCalendar.Views.DAY}
          views={['month', 'day', 'week']}
          step={60}
          selectable={true}
          resizable={true}
          defaultDate={new Date()}
          resources={resourceMap}
          resourceIdAccessor="resourceId" 
          resourceTitleAccessor="resourceTitle"
          onSelectSlot={this.handleSelect}
          onSelectEvent={this.showEvent}
          onEventDrop={this.moveEvent}
          onEventResize={this.resizeEvent}
        />

        <a href="/resourse-calendar">resourse calendar</a>

        {/* <Modal open={this.state.isAddModalOpen} toggle={this.toggleAddModal} event={'test'}></Modal> */}
      </div>
    )
  }
}

// const Modal = (props)=> { 
//     //const {props} = props
//     console.log(props);
//     if(props.open) {
//         return(
//             <div modal-open="true" style={{"width":"200px","height": "150px"}}>
//                 <div className="header" style={{"display": "flex", flexDirection: "rowReverse",width: "40px",height:" 40px"}} onClick={props.toggleAddModal}>
//                     X
//                 </div>
//                 <div className="body">{props.event}</div>
//             </div>
//         )
//     } else {
//         return (
//             <div modal-open="false" style={{"width":"200px","height": "150px"}}>
//                 <div className="header" style={{"display": "flex", flexDirection: "rowReverse",width: "40px",height:" 40px"}} onClick={props.toggleAddModal}>
//                     X
//                 </div>
//                 <div className="body">Modal Render</div> 
//             </div>
//         )
//     }
// }

/* let Basic = () => (
  <BigCalendar
    events={events}
    views={allViews}
    //step={60}
    //showMultiDayTimes
    //max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
    defaultDate={new Date()}
    localizer={localizer}
    titleAccessor={this.getTitle}
  />
) */


export default Calendar