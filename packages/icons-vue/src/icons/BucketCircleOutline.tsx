// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/BucketCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketCircleOutline: BucketCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketCircleOutlineSvg}></AntdIcon>;
};

BucketCircleOutline.displayName = 'BucketCircleOutline';
BucketCircleOutline.inheritAttrs = false;
export default BucketCircleOutline;