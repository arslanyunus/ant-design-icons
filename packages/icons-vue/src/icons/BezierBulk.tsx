// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BezierBulkSvg from '@ant-design/icons-svg/lib/asn/BezierBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BezierBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BezierBulk: BezierBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BezierBulkSvg}></AntdIcon>;
};

BezierBulk.displayName = 'BezierBulk';
BezierBulk.inheritAttrs = false;
export default BezierBulk;