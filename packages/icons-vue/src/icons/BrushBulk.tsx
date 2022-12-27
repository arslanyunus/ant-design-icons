// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrushBulkSvg from '@ant-design/icons-svg/lib/asn/BrushBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrushBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrushBulk: BrushBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrushBulkSvg}></AntdIcon>;
};

BrushBulk.displayName = 'BrushBulk';
BrushBulk.inheritAttrs = false;
export default BrushBulk;