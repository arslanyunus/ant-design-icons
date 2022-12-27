// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicPlayBulkSvg from '@ant-design/icons-svg/lib/asn/MusicPlayBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicPlayBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicPlayBulk: MusicPlayBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicPlayBulkSvg}></AntdIcon>;
};

MusicPlayBulk.displayName = 'MusicPlayBulk';
MusicPlayBulk.inheritAttrs = false;
export default MusicPlayBulk;