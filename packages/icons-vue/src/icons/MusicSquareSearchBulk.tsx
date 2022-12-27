// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareSearchBulkSvg from '@ant-design/icons-svg/lib/asn/MusicSquareSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareSearchBulk: MusicSquareSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareSearchBulkSvg}></AntdIcon>;
};

MusicSquareSearchBulk.displayName = 'MusicSquareSearchBulk';
MusicSquareSearchBulk.inheritAttrs = false;
export default MusicSquareSearchBulk;