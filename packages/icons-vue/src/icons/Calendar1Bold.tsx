// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar1BoldSvg from '@ant-design/icons-svg/lib/asn/Calendar1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar1Bold: Calendar1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar1BoldSvg}></AntdIcon>;
};

Calendar1Bold.displayName = 'Calendar1Bold';
Calendar1Bold.inheritAttrs = false;
export default Calendar1Bold;