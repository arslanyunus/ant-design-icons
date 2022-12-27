// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicSquareRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/MusicSquareRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicSquareRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicSquareRemoveBulk: MusicSquareRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicSquareRemoveBulkSvg}></AntdIcon>;
};

MusicSquareRemoveBulk.displayName = 'MusicSquareRemoveBulk';
MusicSquareRemoveBulk.inheritAttrs = false;
export default MusicSquareRemoveBulk;