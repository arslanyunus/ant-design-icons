// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicLinearSvg from '@ant-design/icons-svg/lib/asn/MusicLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicLinear: MusicLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicLinearSvg}></AntdIcon>;
};

MusicLinear.displayName = 'MusicLinear';
MusicLinear.inheritAttrs = false;
export default MusicLinear;