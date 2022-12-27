// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarEditBoldSvg from '@ant-design/icons-svg/lib/asn/CalendarEditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarEditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarEditBold: CalendarEditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarEditBoldSvg}></AntdIcon>;
};

CalendarEditBold.displayName = 'CalendarEditBold';
CalendarEditBold.inheritAttrs = false;
export default CalendarEditBold;