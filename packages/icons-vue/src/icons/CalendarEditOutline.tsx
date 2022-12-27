// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarEditOutlineSvg from '@ant-design/icons-svg/lib/asn/CalendarEditOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarEditOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarEditOutline: CalendarEditOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarEditOutlineSvg}></AntdIcon>;
};

CalendarEditOutline.displayName = 'CalendarEditOutline';
CalendarEditOutline.inheritAttrs = false;
export default CalendarEditOutline;