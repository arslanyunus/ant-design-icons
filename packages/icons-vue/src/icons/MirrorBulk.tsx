// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MirrorBulkSvg from '@ant-design/icons-svg/lib/asn/MirrorBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MirrorBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MirrorBulk: MirrorBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MirrorBulkSvg}></AntdIcon>;
};

MirrorBulk.displayName = 'MirrorBulk';
MirrorBulk.inheritAttrs = false;
export default MirrorBulk;