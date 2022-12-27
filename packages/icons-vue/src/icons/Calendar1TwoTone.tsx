// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Calendar1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar1TwoTone: Calendar1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar1TwoToneSvg}></AntdIcon>;
};

Calendar1TwoTone.displayName = 'Calendar1TwoTone';
Calendar1TwoTone.inheritAttrs = false;
export default Calendar1TwoTone;