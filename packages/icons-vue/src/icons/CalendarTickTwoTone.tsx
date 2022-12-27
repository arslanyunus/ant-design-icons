// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarTickTwoTone: CalendarTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarTickTwoToneSvg}></AntdIcon>;
};

CalendarTickTwoTone.displayName = 'CalendarTickTwoTone';
CalendarTickTwoTone.inheritAttrs = false;
export default CalendarTickTwoTone;