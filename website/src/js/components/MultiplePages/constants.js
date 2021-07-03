import React from 'react';
import MediaQuery from 'react-responsive';

export const HOME_PAGE_DARK_COLOR = "black";
export const HOME_PAGE_LIGHT_COLOR = "white";
export const HOME_PAGE_YELLOW = "#FFB81C"
export const HOME_PAGE_LIGHT_TEXT_COLOR = "#e8e8e8";
export const HOME_PAGE_DARK_TEXT_COLOR = "#3a3a3c";

export const MEMBERS_PAGE_LIGHT_GRAY = "#888888";

export const BACK_BASE_URL = process.env.NODE_ENV === "production" ? "http://designcreatesolar.org/api" : "http://localhost:5000";

export const Desktop = (props) => <MediaQuery {...props} minDeviceWidth={1225} />;
// export const Tablet = (props) => <MediaQuery {...props} minDeviceWidth={768} maxDeviceWidth={1224} />;
export const Mobile = (props) => <MediaQuery {...props} maxDeviceWidth={766} />;
export const Default = (props) => <MediaQuery {...props} minDeviceWidth={767} maxDeviceWidth={1224} />;
