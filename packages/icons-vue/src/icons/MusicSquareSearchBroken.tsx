// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/MusicSquareSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareSearchBroken: MusicSquareSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareSearchBrokenSvg}></AntdIcon>;
};

MusicSquareSearchBroken.displayName = 'MusicSquareSearchBroken';
MusicSquareSearchBroken.inheritAttrs = false;
export default MusicSquareSearchBroken;