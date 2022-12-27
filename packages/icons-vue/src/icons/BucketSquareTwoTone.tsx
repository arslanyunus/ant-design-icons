// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/BucketSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketSquareTwoTone: BucketSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketSquareTwoToneSvg}></AntdIcon>;
};

BucketSquareTwoTone.displayName = 'BucketSquareTwoTone';
BucketSquareTwoTone.inheritAttrs = false;
export default BucketSquareTwoTone;