import React from 'react';
import './PostDate.scss'
function PostDate(props) {

    function formatDate(date) {
        const monthNames =[
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        const dateObj = new Date(date);
        return  monthNames[dateObj.getMonth()-1] + '.' + dateObj.getDay()
    }
    return (<div className={'flexBox'}>
                <div>{formatDate(props.date)}</div>
            </div>
    );
}

export default PostDate;