// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Driver2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Driver2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Driver2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Driver2TwoTone: Driver2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Driver2TwoToneSvg}></AntdIcon>;
};

Driver2TwoTone.displayName = 'Driver2TwoTone';
Driver2TwoTone.inheritAttrs = false;
export default Driver2TwoTone;