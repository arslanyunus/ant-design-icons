// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketCircle1LinearSvg from '@ant-design/icons-svg/lib/asn/BucketCircle1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketCircle1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketCircle1Linear: BucketCircle1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketCircle1LinearSvg}></AntdIcon>;
};

BucketCircle1Linear.displayName = 'BucketCircle1Linear';
BucketCircle1Linear.inheritAttrs = false;
export default BucketCircle1Linear;