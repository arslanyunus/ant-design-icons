// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountCircleBulkSvg from '@ant-design/icons-svg/lib/asn/DiscountCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountCircleBulk: DiscountCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountCircleBulkSvg}></AntdIcon>;
};

DiscountCircleBulk.displayName = 'DiscountCircleBulk';
DiscountCircleBulk.inheritAttrs = false;
export default DiscountCircleBulk;