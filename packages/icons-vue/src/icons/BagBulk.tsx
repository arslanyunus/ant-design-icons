// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagBulkSvg from '@ant-design/icons-svg/lib/asn/BagBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagBulk: BagBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagBulkSvg}></AntdIcon>;
};

BagBulk.displayName = 'BagBulk';
BagBulk.inheritAttrs = false;
export default BagBulk;