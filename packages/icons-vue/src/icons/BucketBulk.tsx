// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketBulkSvg from '@ant-design/icons-svg/lib/asn/BucketBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketBulk: BucketBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketBulkSvg}></AntdIcon>;
};

BucketBulk.displayName = 'BucketBulk';
BucketBulk.inheritAttrs = false;
export default BucketBulk;