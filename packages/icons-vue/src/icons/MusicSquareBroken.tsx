// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/MusicSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareBroken: MusicSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareBrokenSvg}></AntdIcon>;
};

MusicSquareBroken.displayName = 'MusicSquareBroken';
MusicSquareBroken.inheritAttrs = false;
export default MusicSquareBroken;