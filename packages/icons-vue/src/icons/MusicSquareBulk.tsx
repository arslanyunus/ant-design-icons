// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareBulkSvg from '@ant-design/icons-svg/lib/asn/MusicSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareBulk: MusicSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareBulkSvg}></AntdIcon>;
};

MusicSquareBulk.displayName = 'MusicSquareBulk';
MusicSquareBulk.inheritAttrs = false;
export default MusicSquareBulk;