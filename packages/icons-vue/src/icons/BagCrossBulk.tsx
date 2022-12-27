// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCrossBulkSvg from '@ant-design/icons-svg/lib/asn/BagCrossBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCrossBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCrossBulk: BagCrossBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCrossBulkSvg}></AntdIcon>;
};

BagCrossBulk.displayName = 'BagCrossBulk';
BagCrossBulk.inheritAttrs = false;
export default BagCrossBulk;