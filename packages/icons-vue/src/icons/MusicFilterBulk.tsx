// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicFilterBulkSvg from '@ant-design/icons-svg/lib/asn/MusicFilterBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicFilterBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicFilterBulk: MusicFilterBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicFilterBulkSvg}></AntdIcon>;
};

MusicFilterBulk.displayName = 'MusicFilterBulk';
MusicFilterBulk.inheritAttrs = false;
export default MusicFilterBulk;