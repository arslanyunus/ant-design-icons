// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BillOutlineSvg from '@ant-design/icons-svg/lib/asn/BillOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BillOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BillOutline: BillOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BillOutlineSvg}></AntdIcon>;
};

BillOutline.displayName = 'BillOutline';
BillOutline.inheritAttrs = false;
export default BillOutline;