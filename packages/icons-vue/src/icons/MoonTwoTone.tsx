// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoonTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoonTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoonTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoonTwoTone: MoonTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonTwoToneSvg}></AntdIcon>;
};

MoonTwoTone.displayName = 'MoonTwoTone';
MoonTwoTone.inheritAttrs = false;
export default MoonTwoTone;