// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketSquare1LinearSvg from '@ant-design/icons-svg/lib/asn/BucketSquare1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketSquare1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketSquare1Linear: BucketSquare1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketSquare1LinearSvg}></AntdIcon>;
};

BucketSquare1Linear.displayName = 'BucketSquare1Linear';
BucketSquare1Linear.inheritAttrs = false;
export default BucketSquare1Linear;