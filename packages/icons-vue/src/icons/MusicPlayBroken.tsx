// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlayBrokenSvg from '@ant-design/icons-svg/lib/asn/MusicPlayBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlayBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlayBroken: MusicPlayBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlayBrokenSvg}></AntdIcon>;
};

MusicPlayBroken.displayName = 'MusicPlayBroken';
MusicPlayBroken.inheritAttrs = false;
export default MusicPlayBroken;