// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar1BrokenSvg from '@ant-design/icons-svg/lib/asn/Calendar1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar1Broken: Calendar1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar1BrokenSvg}></AntdIcon>;
};

Calendar1Broken.displayName = 'Calendar1Broken';
Calendar1Broken.inheritAttrs = false;
export default Calendar1Broken;