// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareAddBrokenSvg from '@ant-design/icons-svg/lib/asn/MusicSquareAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareAddBroken: MusicSquareAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareAddBrokenSvg}></AntdIcon>;
};

MusicSquareAddBroken.displayName = 'MusicSquareAddBroken';
MusicSquareAddBroken.inheritAttrs = false;
export default MusicSquareAddBroken;