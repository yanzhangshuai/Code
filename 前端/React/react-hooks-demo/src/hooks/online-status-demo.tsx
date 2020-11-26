import useNetworkStatus from "@rehooks/network-status";
import React from 'react';
export const OnlineStatusDemo = ()=>{
  let connection = useNetworkStatus();
  return (
    <div>
      <div>downlink: {connection.downlink}</div>
      <div>effectiveType: {connection.effectiveType}</div>
      <div>rtt: {connection.rtt}</div>
      <div>type: {connection.type}</div>
      <div>downlinkMax: {connection.downlinkMax}</div>
    </div>
  );
}