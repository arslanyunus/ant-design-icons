// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/MusicSquareRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareRemoveBroken: MusicSquareRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareRemoveBrokenSvg}></AntdIcon>;
};

MusicSquareRemoveBroken.displayName = 'MusicSquareRemoveBroken';
MusicSquareRemoveBroken.inheritAttrs = false;
export default MusicSquareRemoveBroken;