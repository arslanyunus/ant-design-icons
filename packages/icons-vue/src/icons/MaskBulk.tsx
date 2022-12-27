// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaskBulkSvg from '@ant-design/icons-svg/lib/asn/MaskBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaskBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaskBulk: MaskBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaskBulkSvg}></AntdIcon>;
};

MaskBulk.displayName = 'MaskBulk';
MaskBulk.inheritAttrs = false;
export default MaskBulk;