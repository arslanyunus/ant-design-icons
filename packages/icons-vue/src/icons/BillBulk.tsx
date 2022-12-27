// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BillBulkSvg from '@ant-design/icons-svg/lib/asn/BillBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BillBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BillBulk: BillBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BillBulkSvg}></AntdIcon>;
};

BillBulk.displayName = 'BillBulk';
BillBulk.inheritAttrs = false;
export default BillBulk;