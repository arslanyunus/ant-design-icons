// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Clock1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Clock1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Clock1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Clock1TwoTone: Clock1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Clock1TwoToneSvg}></AntdIcon>;
};

Clock1TwoTone.displayName = 'Clock1TwoTone';
Clock1TwoTone.inheritAttrs = false;
export default Clock1TwoTone;