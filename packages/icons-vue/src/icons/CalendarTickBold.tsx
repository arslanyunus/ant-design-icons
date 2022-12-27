// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarTickBoldSvg from '@ant-design/icons-svg/lib/asn/CalendarTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarTickBold: CalendarTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarTickBoldSvg}></AntdIcon>;
};

CalendarTickBold.displayName = 'CalendarTickBold';
CalendarTickBold.inheritAttrs = false;
export default CalendarTickBold;