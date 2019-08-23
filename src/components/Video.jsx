import React from 'react';
import PropTypes from 'prop-types';
import DateTime from './DateTime';
import DateTimePrettier from './DateTimePrettier';

export default function Video(props) {
  const DateTimePretty = DateTimePrettier(props.date)(DateTime);

  return (
    <div className="video">
        <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
         <DateTimePretty />
     </div>
  )
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

