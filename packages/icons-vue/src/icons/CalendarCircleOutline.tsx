// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/CalendarCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarCircleOutline: CalendarCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarCircleOutlineSvg}></AntdIcon>;
};

CalendarCircleOutline.displayName = 'CalendarCircleOutline';
CalendarCircleOutline.inheritAttrs = false;
export default CalendarCircleOutline;