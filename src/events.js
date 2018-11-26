export default [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2018, 10, 12),
      end: new Date(2018, 10, 12),
      resourceId: 1
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2018, 10, 7),
      end: new Date(2018, 10, 11),
      resourceId: 2
    },
  
    {
      id: 2,
      title: 'DTS STARTS',
      allDay: false,
      start: new Date(2018, 10, 19),
      end: new Date(2018, 10, 21),
      resourceId: 3
    },
  
    {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2018, 10, 16, 0, 0, 0),
      end: new Date(2018, 10, 18, 0, 0, 0),
      resourceId: 4
    },
  
    {
      id: 4,
      title: 'Some Event',
      start: new Date(2018, 11, 9, 0, 0, 0),
      end: new Date(2018, 11, 10, 0, 0, 0),
    },
    {
      id: 5,
      title: 'Conference',
      start: new Date(2018, 11, 11),
      end: new Date(2018, 11, 13),
      desc: 'Big conference for important people',
      resourceId: 5
    },
    {
      id: 6,
      title: 'Meeting',
      start: new Date(2018, 11, 12, 10, 30, 0, 0),
      end: new Date(2018, 11, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
      resourceId: 5
    },
    {
      id: 7,
      title: 'Lunch',
      start: new Date(2018, 11, 12, 12, 0, 0, 0),
      end: new Date(2018, 11, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
      resourceId: 4
    },
    {
      id: 8,
      title: 'Meeting',
      start: new Date(2018, 11, 12, 14, 0, 0, 0),
      end: new Date(2018, 11, 15, 15, 0, 0, 0),
      resourceId: 3
    },
    {
      id: 9,
      title: 'Happy Hour',
      start: new Date(2018, 11, 14, 17, 0, 0, 0),
      end: new Date(2018, 11, 14, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
      color: '#ff6600',
      url: 'http://www.google.com?q=happy+hours',
      resourceId: 2
    },
    {
      id: 10,
      title: 'Dinner',
      start: new Date(2018, 11, 19, 20, 0, 0, 0),
      end: new Date(2018, 11, 20, 21, 0, 0, 0),
      resourceId: 2
    },
    {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2018, 11, 20, 7, 0, 0),
      end: new Date(2018, 11, 21, 10, 30, 0),
      resourceId: 2
    },
    {
      id: 12,
      title: 'Late Night Event',
      start: new Date(2018, 3, 17, 19, 30, 0),
      end: new Date(2018, 3, 18, 2, 0, 0),
      resourceId: 1
    },
    {
      id: 15,
      title: 'Late Same Night Event',
      start: new Date(2018, 11, 17, 19, 30, 0),
      end: new Date(2018, 11, 17, 23, 30, 0),
      resourceId: 3
    },
    {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2018, 11, 20, 19, 30, 0),
      end: new Date(2018, 11, 22, 2, 0, 0),
      resourceId: 1
    },
    {
      id: 14,
      title: 'Today', 
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
      resourceId: 4
    },
  ]

  