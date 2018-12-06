import React from 'react'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import events from '../events'
import moment from 'moment'

import Dialog from './pop-up'

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

// custom event ui
/* function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ':  ' + event.desc}
    </span>
  )
} */

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  )
}

// class CalEventWrapper extends React.Component {
//   handleEventClick = ()=>{
//     console.log('event clicked!')
//    };
//   render() {
//     const {event, theme} = this.props;
//     return (
//         <div onClick={this.handleEventClick} style={{zIndex:999, marginTop: 2, backgroundColor: 'smokeWhite', borderRadius: 10}}>
//             <div style={{paddingRight: 15}}>
//                 <a href='some-shit' color='default'>
//                     {event.title}
//                 </a>
//             </div>
//         </div>
//     )
//   }
// }

const MonthEvent = ({ event }) => (
  <div className={event.someProp ? 'specialEvent':'normalEvent'}>
    <div className={'eventTime'}>{event.start}</div>
    <div className={'eventName'}>{event.name}</div>
  </div>
);

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        events:events, 
        open: false,
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
  handleSelect = ({ start, end, slots, action, resourceId }) => {
    console.log({ start, end, slots, action, resourceId })
    this.setState({type:'create', currentEventSelection: ''})
    this.handleClickOpen()
    const title = "window.prompt('New Event name')"
    //const resourceId = parseInt(window.prompt('resourseId? ')) 
    //const resourceId = 1 
    
    if(title) {
        let events = this.state.events;
        events.push({
            id: (this.state.events[this.state.events.length-1].id)+1,
            start,end,title,resourceId
        })
        this.setState({
          events
        })
        console.log(this.state)
    }
  }
  showEvent = (event) => {
      // alert(`This is a ${event.title} Event,\n Desc: ${event.desc}`);
      // if(!this.state.isEditModalOpen) {
      //   this.setState({
      //       isEditModalOpen: !this.state.isEditModalOpen
      //   })
      // }
      this.setState({
        type: 'display',
        currentEventSelection: event
      })
      this.handleClickOpen()
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
  moveEvent({ event, start, end, resourceId, isAllDay: droppedOnAllDaySlot }) {
    console.log('move event args: ', {event, start, end, resourceId, droppedOnAllDaySlot});
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, resourceId, allDay }

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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = (d) => {
    console.log(d);
    this.setState({ open: false });
  };
  

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
          views={['month', 'day', 'week', 'agenda']}
          step={60}
          selectable={true}
          resizable={true}
          defaultDate={new Date()}
          resources={resourceMap} // include resources 
          resourceIdAccessor="resourceId" 
          resourceTitleAccessor="resourceTitle"
          onSelectSlot={this.handleSelect}
          onSelectEvent={this.showEvent}
          onEventDrop={this.moveEvent}
          onEventResize={this.resizeEvent}
          formats={{ eventTimeRangeFormat: () => null }} //remove time range from event view 
          components={{
            //event: MonthEvent,
            eventWrapper: MonthEvent,
            agenda: {
              event: EventAgenda,
            },
          }}
          popup
        />

        <Dialog openDialog={this.handleClickOpen} closeDialog={this.handleClose} type={this.state.type} open={this.state.open} eventInfo={this.state.currentEventSelection} />

         <a href="/resourse-calendar">resourse calendar</a>
 
       
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