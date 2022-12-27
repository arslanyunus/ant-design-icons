// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BillBrokenSvg from '@ant-design/icons-svg/lib/asn/BillBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BillBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BillBroken: BillBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BillBrokenSvg}></AntdIcon>;
};

BillBroken.displayName = 'BillBroken';
BillBroken.inheritAttrs = false;
export default BillBroken;