// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicCircleBulkSvg from '@ant-design/icons-svg/lib/asn/MusicCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicCircleBulk: MusicCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicCircleBulkSvg}></AntdIcon>;
};

MusicCircleBulk.displayName = 'MusicCircleBulk';
MusicCircleBulk.inheritAttrs = false;
export default MusicCircleBulk;