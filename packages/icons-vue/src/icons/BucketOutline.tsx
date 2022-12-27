// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BucketOutlineSvg from '@ant-design/icons-svg/lib/asn/BucketOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BucketOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BucketOutline: BucketOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BucketOutlineSvg}></AntdIcon>;
};

BucketOutline.displayName = 'BucketOutline';
BucketOutline.inheritAttrs = false;
export default BucketOutline;