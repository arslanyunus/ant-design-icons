// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarEditTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarEditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarEditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarEditTwoTone: CalendarEditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarEditTwoToneSvg}></AntdIcon>;
};

CalendarEditTwoTone.displayName = 'CalendarEditTwoTone';
CalendarEditTwoTone.inheritAttrs = false;
export default CalendarEditTwoTone;