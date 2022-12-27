// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagHappyBulkSvg from '@ant-design/icons-svg/lib/asn/BagHappyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagHappyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagHappyBulk: BagHappyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagHappyBulkSvg}></AntdIcon>;
};

BagHappyBulk.displayName = 'BagHappyBulk';
BagHappyBulk.inheritAttrs = false;
export default BagHappyBulk;