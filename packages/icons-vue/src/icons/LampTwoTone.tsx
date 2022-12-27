// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampTwoToneSvg from '@ant-design/icons-svg/lib/asn/LampTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampTwoTone: LampTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampTwoToneSvg}></AntdIcon>;
};

LampTwoTone.displayName = 'LampTwoTone';
LampTwoTone.inheritAttrs = false;
export default LampTwoTone;