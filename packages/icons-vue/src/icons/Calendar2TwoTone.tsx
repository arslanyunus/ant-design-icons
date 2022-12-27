// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Calendar2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar2TwoTone: Calendar2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar2TwoToneSvg}></AntdIcon>;
};

Calendar2TwoTone.displayName = 'Calendar2TwoTone';
Calendar2TwoTone.inheritAttrs = false;
export default Calendar2TwoTone;