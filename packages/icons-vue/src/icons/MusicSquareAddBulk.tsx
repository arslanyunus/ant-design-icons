// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareAddBulkSvg from '@ant-design/icons-svg/lib/asn/MusicSquareAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareAddBulk: MusicSquareAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareAddBulkSvg}></AntdIcon>;
};

MusicSquareAddBulk.displayName = 'MusicSquareAddBulk';
MusicSquareAddBulk.inheritAttrs = false;
export default MusicSquareAddBulk;