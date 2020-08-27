import React from 'react'

export const JournalEntrie = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture" style={{backgroundSize: 'cover', backgroundImage: 'url(https://www.nationalgeographic.com/content/dam/yourshot/2014/06/3881140.jpg)'}}></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo día</p>
                <p className="journal__entry-content">Lorem, ipsum dolor.</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
