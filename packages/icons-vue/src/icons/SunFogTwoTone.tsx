// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunFogTwoToneSvg from '@ant-design/icons-svg/lib/asn/SunFogTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunFogTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunFogTwoTone: SunFogTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunFogTwoToneSvg}></AntdIcon>;
};

SunFogTwoTone.displayName = 'SunFogTwoTone';
SunFogTwoTone.inheritAttrs = false;
export default SunFogTwoTone;