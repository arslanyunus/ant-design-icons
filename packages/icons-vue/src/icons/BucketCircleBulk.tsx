// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketCircleBulkSvg from '@ant-design/icons-svg/lib/asn/BucketCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketCircleBulk: BucketCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketCircleBulkSvg}></AntdIcon>;
};

BucketCircleBulk.displayName = 'BucketCircleBulk';
BucketCircleBulk.inheritAttrs = false;
export default BucketCircleBulk;