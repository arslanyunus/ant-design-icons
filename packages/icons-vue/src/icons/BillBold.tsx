// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BillBoldSvg from '@ant-design/icons-svg/lib/asn/BillBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BillBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BillBold: BillBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BillBoldSvg}></AntdIcon>;
};

BillBold.displayName = 'BillBold';
BillBold.inheritAttrs = false;
export default BillBold;