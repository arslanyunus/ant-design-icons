// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicBulkSvg from '@ant-design/icons-svg/lib/asn/MusicBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicBulk: MusicBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicBulkSvg}></AntdIcon>;
};

MusicBulk.displayName = 'MusicBulk';
MusicBulk.inheritAttrs = false;
export default MusicBulk;