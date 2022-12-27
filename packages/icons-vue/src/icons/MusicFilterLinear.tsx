// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicFilterLinearSvg from '@ant-design/icons-svg/lib/asn/MusicFilterLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicFilterLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicFilterLinear: MusicFilterLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicFilterLinearSvg}></AntdIcon>;
};

MusicFilterLinear.displayName = 'MusicFilterLinear';
MusicFilterLinear.inheritAttrs = false;
export default MusicFilterLinear;