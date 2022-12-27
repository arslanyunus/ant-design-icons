// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BulidingBulkSvg from '@ant-design/icons-svg/lib/asn/BulidingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BulidingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BulidingBulk: BulidingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BulidingBulkSvg}></AntdIcon>;
};

BulidingBulk.displayName = 'BulidingBulk';
BulidingBulk.inheritAttrs = false;
export default BulidingBulk;