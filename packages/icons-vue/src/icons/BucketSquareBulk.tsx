// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketSquareBulkSvg from '@ant-design/icons-svg/lib/asn/BucketSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketSquareBulk: BucketSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketSquareBulkSvg}></AntdIcon>;
};

BucketSquareBulk.displayName = 'BucketSquareBulk';
BucketSquareBulk.inheritAttrs = false;
export default BucketSquareBulk;