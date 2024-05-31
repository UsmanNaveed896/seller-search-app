import React from 'react'
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
    Toolbar,
    DateNavigator,
    WeekView,
} from '@devexpress/dx-react-scheduler-material-ui';
import Img from '../../assets/Group 81.png'
const Schedulers = () => {
    const currentDate = '2018-11-01';
    const schedulerData = [
        { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
        { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
    ];
    return (
        <>
            <div className="flex justify-center">
                <div className="container max-w-[1250px]">
                    <div className='grid grid-cols-3 items-center gap-3'>
                        <div className='col-span-2'>
                            <h1 className='font-bold'>My Schedule</h1>
                            <Scheduler
                                data={schedulerData}
                            >
                                <ViewState
                                    currentDate={currentDate}
                                />
                                <WeekView
                                    startDayHour={9}
                                    endDayHour={14}
                                />
                                <Toolbar />
                                <DateNavigator />
                                <Appointments />
                            </Scheduler>
                        </div>
                        <div className='column2'>
                            <div className=''>
                                <div className='g border rounded-lg'>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <div>
                                                <img src={Img} alt='icon' />
                                            </div>
                                            <div>
                                                <p className='text-bold text-[12px]'>Vladislav Maidan</p>
                                                <p className='text-[#d8d7d7] text-[12px]'>Group111 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border rounded-lg px-2 py-2 mt-4'>
                                    <div className='flex justify-between items-center '>
                                        <p>Calender Details</p>
                                        <i className='fa fa-plus text-[#5272e9]' />
                                    </div>
                                    <div className="container mx-auto mt-2">
                                        <label className="flex items-center space-x-2 text-black mb-2">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-blue-500 focus:ring-blue-500 focus:border-blue-500 h-4 w-4"
                                            />
                                            <span className='text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                        </label>

                                        <label className="flex items-center space-x-2 text-black mb-2">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-green-500 focus:ring-green-500 focus:border-green-500 h-4 w-4"
                                            />
                                            <span className='text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                        </label>

                                        <label className="flex items-center space-x-2 text-black mb-2">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 h-4 w-4"
                                            />
                                            <span className='text-[12px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Schedulers;