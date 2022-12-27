// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar2LinearSvg from '@ant-design/icons-svg/lib/asn/Calendar2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar2Linear: Calendar2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar2LinearSvg}></AntdIcon>;
};

Calendar2Linear.displayName = 'Calendar2Linear';
Calendar2Linear.inheritAttrs = false;
export default Calendar2Linear;