export const Dashboard = () => {
    const mockData: any[] = [
        {
            title: 'Registered Users',
            Icon: PersonAddIcon,
            count: '225'
        },
        {
            title: 'Onboarded Users',
            Icon: SupervisorAccountIcon,
            count: '152'
        },
        {
            title: 'KYC Completed Users',
            Icon: BeenhereIcon,
            count: '78'
        },
        {
            title: 'Total Vehicles',
            Icon: DirectionsCarIcon,
            count: '150'
        },
    
    ];
    const colors = ['green', 'gray', 'blue', 'yellow'];
    return (

        <div className='flex flex-col justify-center min-w-1/2 relative bg-blue-500'>
            <div className='flex flex-wrap justify-center mb-10'>
                {mockData.length ? mockData.map(({ title, Icon, count }, i) => {
                    return (
                        <Paper elevation={2} className='flex justify-end p-8 m-8 w-80 relative'>
                            <div className={`text-3xl absolute -top-5 left-7 bg-gradient-to-tr from-${colors[i]}-600 to-${colors[i]}-800 text-white shadow-2xl rounded-sm w-20 h-20 grid place-items-center`}><Icon /></div>

                            <div className='flex flex-col items-center'>
                                <Box className='text-3xl mb-3 font-bold'>{count}</Box>
                                <Box className='text-md'>{title}</Box>
                            </div>


                        </Paper>

                    )
                }) : <Typography variant='h5' align='right' color='textSecondary'>No Data</Typography>}
            </div>

            <Divider  />

            <div className='flex flex-wrap justify-around mt-20 relative pt-20 rounded-md shadow-lg z-20 bg-gradient-to-r from-white to-white'>
                <div className='text-center w-11/12 absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-900 text-lg p-5 text-white rounded-sm'>
                    Statistics per broker
                </div>
                <div className='relative mt-10'>
                    <div className='p-5 flex justify-center items-center absolute border-solid h-20 top-5 left-1/2 transform -translate-x-1/2 z-100'>
                        <img className='w-20 border border-solid border-gray rounded-lg mr-3' src='https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png' /><span>Broker 1</span>
                    </div>
                    <Chart
                        width={'800px'}
                        height={'700px'}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Field', 'Count', { role: 'style' }],

                            ['Registered Users', 100, '#067B58'],
                            ['Onboarded Users', 77, '#353F4D'],
                            ['KYC Completed Users', 32, '#2252CD'],
                            ['Vehicles', 56, '#B65C0A'],
                        ]}
                        options={{
                            vAxis: {
                                title: 'Count',
                                minValue: 0
                            },

                            legend: { position: 'none' },
                            backgroundColor: 'transparent',

                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />

                </div>

                <div className='relative mt-10'>
                    <div className='p-5 flex justify-center items-center absolute border-solid h-20 top-5 left-1/2 transform -translate-x-1/2 z-100'>
                        <img className='w-20 border border-solid border-gray rounded-lg mr-3' src='https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png' /><span>Broker 2</span>
                    </div>
                    <Chart
                        width={'800px'}
                        height={'700px'}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Field', 'Count', { role: 'style' }],

                            ['Registered Users', 125, '#067B58'],
                            ['Onboarded Users', 75, '#353F4D'],
                            ['KYC Completed Users', 38, '#2252CD'],
                            ['Vehicles', 98, '#B65C0A'],
                        ]}
                        options={{
                            vAxis: {
                                title: 'Count',
                                minValue: 0
                            }, legend: { position: 'none' },
                            backgroundColor: 'transparent',

                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />

                </div>
            </div>
        </div>

    )
}
