// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlayBoldSvg from '@ant-design/icons-svg/lib/asn/MusicPlayBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlayBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlayBold: MusicPlayBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlayBoldSvg}></AntdIcon>;
};

MusicPlayBold.displayName = 'MusicPlayBold';
MusicPlayBold.inheritAttrs = false;
export default MusicPlayBold;