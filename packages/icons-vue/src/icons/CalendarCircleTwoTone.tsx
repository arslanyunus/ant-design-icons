// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarCircleTwoTone: CalendarCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarCircleTwoToneSvg}></AntdIcon>;
};

CalendarCircleTwoTone.displayName = 'CalendarCircleTwoTone';
CalendarCircleTwoTone.inheritAttrs = false;
export default CalendarCircleTwoTone;