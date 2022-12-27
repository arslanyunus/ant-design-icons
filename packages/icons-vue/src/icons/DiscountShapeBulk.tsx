// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountShapeBulkSvg from '@ant-design/icons-svg/lib/asn/DiscountShapeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountShapeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountShapeBulk: DiscountShapeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountShapeBulkSvg}></AntdIcon>;
};

DiscountShapeBulk.displayName = 'DiscountShapeBulk';
DiscountShapeBulk.inheritAttrs = false;
export default DiscountShapeBulk;