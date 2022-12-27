// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar1OutlineSvg from '@ant-design/icons-svg/lib/asn/Calendar1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar1Outline: Calendar1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar1OutlineSvg}></AntdIcon>;
};

Calendar1Outline.displayName = 'Calendar1Outline';
Calendar1Outline.inheritAttrs = false;
export default Calendar1Outline;