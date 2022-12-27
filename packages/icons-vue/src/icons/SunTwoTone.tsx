// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunTwoToneSvg from '@ant-design/icons-svg/lib/asn/SunTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunTwoTone: SunTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunTwoToneSvg}></AntdIcon>;
};

SunTwoTone.displayName = 'SunTwoTone';
SunTwoTone.inheritAttrs = false;
export default SunTwoTone;