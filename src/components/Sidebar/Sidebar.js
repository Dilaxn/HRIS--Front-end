import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [

  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  { id: 1, label: "Admin", link: "/app/users", icon: <HomeIcon /> ,
    children: [
      { label: "User Management", link: "/app/users" ,
        children: [
          { label: "Users", link: "/app/users" },
        ],},

      { label: "Job", link: "/app/jobtitles",
        children: [
          { label: "Job Titles", link: "/app/jobtitles" },
          { label: "Pay Grades", link: "/app/paygrades" },
          { label: "Employment Status", link: "/app/employementstatus" },
          { label: "Job Categories", link: "/app/jobcategories" },
          { label: "Work Shifts", link: "/app/addworkshift" },
        ],},
      { label: "Organization", link: "/app/ui/maps",
        children: [
          { label: "General Information", link: "/app/generalinformation" },
          { label: "Locations", link: "/app/locations" },
          { label: "Structure", link: "/app/ui/maps" },
        ],},
      { label: "Qualifications", link: "/app/ui/charts",
        children: [
          { label: "Skills", link: "/app/skills" },
          { label: "Education", link: "/app/education" },
          { label: "Licenses", link: "/app/licenses" },
          { label: "Languages", link: "/app/languages" },
          { label: "Memberships", link: "/app/memberships" },
        ],},
      { label: "Nationality", link: "/app/ui/maps" },
      { label: "Configuration", link: "/app/ui/maps",
        children: [
          { label: "Email Configuration", link: "/app/users" },
          { label: "Email Subscription", link: "/app/jobtitles" },
          { label: "Location", link: "/app/ui/maps" },
          { label: "Modules", link: "/app/ui/charts" },
          { label: "Social Media Authentication", link: "/app/ui/maps" },
          { label: "Register OAuth Client", link: "/app/ui/maps" },
        ],},
    ],},

  { id: 0, label: "PIM", link: "/app/dashboard", icon: <HomeIcon /> ,
    children: [
      { label: "Configuration", link: "/app/ui/icons",
        children: [
          { label: "Optional Fields", link: "/app/optionalfields" },
          { label: "Custom Fields", link: "/app/customfields" },
          { label: "Data Import", link: "/app/dataimport" },
          { label: "Reporting Methods", link: "/app/reportmethods" },
          { label: "Terminated Reasons", link: "/app/terminatedreasons" },
        ],},
      { label: "Employee List", link: "/app/employeelist" },
      { label: "Add Employee", link: "/app/addemployee" },
      { label: "Reports", link: "/app/ui/maps" },
    ],},

  { id: 0, label: "Leave", link: "/app/dashboard", icon: <HomeIcon /> ,
    children: [
      { label: "Apply", link: "/app/ui/icons" },
      { label: "My Leave", link: "/app/ui/charts" },
      { label: "Entitlements", link: "/app/ui/maps",
        children: [
          { label: "Add Entitlements", link: "/app/users" },
          { label: "Employee Entitlements", link: "/app/jobtitles" },
          { label: "My Entitlements", link: "/app/ui/maps" },
        ],},
      { label: "Reports", link: "/app/ui/icons",
        children: [
          { label: "Leave Entitlements and Usage Report", link: "/app/users" },
          { label: "My Leave Entitlements and Usage Report", link: "/app/jobtitles" },
        ],},
      { label: "Configure", link: "/app/ui/charts",
        children: [
          { label: "Leave Period", link: "/app/users" },
          { label: "Leave Types", link: "/app/jobtitles" },
          { label: "Work Week", link: "/app/ui/maps" },
          { label: "Holidays", link: "/app/ui/charts" },
        ],},
      { label: "Leave List", link: "/app/ui/maps" },
      { label: "Assign Leave", link: "/app/ui/maps" },
    ],},

  { id: 0, label: "Time", link: "/app/dashboard", icon: <HomeIcon /> ,
    children: [
      { label: "Timesheets", link: "/app/ui/icons",
        children: [
          { label: "My Timesheets", link: "/app/users" },
          { label: "Employee Timesheets", link: "/app/jobtitles" },
        ],},
      { label: "Attendance", link: "/app/ui/charts",
        children: [
          { label: "My Records", link: "/app/users" },
          { label: "Punch In/Out", link: "/app/jobtitles" },
          { label: "Employee Records", link: "/app/ui/maps" },
          { label: "Configuration", link: "/app/ui/maps" },
        ],},
      { label: "Reports", link: "/app/ui/maps",
        children: [
          { label: "Project Reports", link: "/app/users" },
          { label: "Employee Reports", link: "/app/jobtitles" },
          { label: "Attendance Summary", link: "/app/ui/maps" },
        ],},
      { label: "Project Info", link: "/app/ui/maps",
        children: [
          { label: "Customers", link: "/app/users" },
          { label: "Projects", link: "/app/jobtitles" },
        ],},
    ],},
  { id: 0, label: "Recruitment", link: "/app/dashboard", icon: <HomeIcon /> },
  { id: 0, label: "MyInfo", link: "/app/dashboard", icon: <HomeIcon /> },
  { id: 0, label: "Directory", link: "/app/dashboard", icon: <HomeIcon /> },
  { id: 0, label: "Buzz", link: "/app/dashboard", icon: <HomeIcon /> },

  {
    id: 1,
    label: "Typography",
    link: "/app/typography",
    icon: <TypographyIcon />,
  },
  { id: 2, label: "Tables", link: "/app/tables", icon: <TableIcon /> },
  {
    id: 3,
    label: "Notifications",
    link: "/app/notifications",
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: "UI Elements",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Charts", link: "/app/ui/charts" },
      { label: "Maps", link: "/app/ui/maps" },
    ],
  },
  { id: 5, type: "divider" },
  { id: 6, type: "title", label: "HELP" },
  { id: 7, label: "Library", link: "", icon: <LibraryIcon /> },
  { id: 8, label: "Support", link: "", icon: <SupportIcon /> },
  { id: 9, label: "FAQ", link: "", icon: <FAQIcon /> },
  { id: 10, type: "divider" },
  { id: 11, type: "title", label: "PROJECTS" },
  {
    id: 12,
    label: "My recent",
    link: "",
    icon: <Dot size="small" color="warning" />,
  },
  {
    id: 13,
    label: "Starred",
    link: "",
    icon: <Dot size="small" color="primary" />,
  },
  {
    id: 14,
    label: "Background",
    link: "",
    icon: <Dot size="small" color="secondary" />,
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
