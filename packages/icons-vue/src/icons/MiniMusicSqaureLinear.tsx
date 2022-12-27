// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MiniMusicSqaureLinearSvg from '@ant-design/icons-svg/lib/asn/MiniMusicSqaureLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MiniMusicSqaureLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MiniMusicSqaureLinear: MiniMusicSqaureLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MiniMusicSqaureLinearSvg}></AntdIcon>;
};

MiniMusicSqaureLinear.displayName = 'MiniMusicSqaureLinear';
MiniMusicSqaureLinear.inheritAttrs = false;
export default MiniMusicSqaureLinear;