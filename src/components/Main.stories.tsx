  
import React from "react";
import { Provider } from "react-redux";
import { store } from "../Store/store";
import InboxScreen from "./Main";
// import {} from "@storybook/react/types-6-0";


import * as TaskListStories from "./taskList.stories";
export default {
  component: InboxScreen,
  title: "inbox screen",
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
} 

const Template = (args: any) => <InboxScreen />;

export const Default: any = Template.bind({});