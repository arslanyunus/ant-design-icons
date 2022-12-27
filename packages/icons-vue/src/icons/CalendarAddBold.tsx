// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarAddBoldSvg from '@ant-design/icons-svg/lib/asn/CalendarAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarAddBold: CalendarAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarAddBoldSvg}></AntdIcon>;
};

CalendarAddBold.displayName = 'CalendarAddBold';
CalendarAddBold.inheritAttrs = false;
export default CalendarAddBold;