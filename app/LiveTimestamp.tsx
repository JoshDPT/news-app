'use client'
import TimeAgo from 'react-timeago';

type Props = {
  time: string;
}

export default function LiveTimeStamp({ time }: Props) {
  return (
    <TimeAgo date={time} /> 
  );
}