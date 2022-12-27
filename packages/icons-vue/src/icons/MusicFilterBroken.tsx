// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicFilterBrokenSvg from '@ant-design/icons-svg/lib/asn/MusicFilterBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicFilterBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicFilterBroken: MusicFilterBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicFilterBrokenSvg}></AntdIcon>;
};

MusicFilterBroken.displayName = 'MusicFilterBroken';
MusicFilterBroken.inheritAttrs = false;
export default MusicFilterBroken;