// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar1LinearSvg from '@ant-design/icons-svg/lib/asn/Calendar1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar1Linear: Calendar1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar1LinearSvg}></AntdIcon>;
};

Calendar1Linear.displayName = 'Calendar1Linear';
Calendar1Linear.inheritAttrs = false;
export default Calendar1Linear;