// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTickBulkSvg from '@ant-design/icons-svg/lib/asn/BagTickBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTickBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTickBulk: BagTickBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTickBulkSvg}></AntdIcon>;
};

BagTickBulk.displayName = 'BagTickBulk';
BagTickBulk.inheritAttrs = false;
export default BagTickBulk;