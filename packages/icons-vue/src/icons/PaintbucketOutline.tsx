// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaintbucketOutlineSvg from '@ant-design/icons-svg/lib/asn/PaintbucketOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaintbucketOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaintbucketOutline: PaintbucketOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaintbucketOutlineSvg}></AntdIcon>;
};

PaintbucketOutline.displayName = 'PaintbucketOutline';
PaintbucketOutline.inheritAttrs = false;
export default PaintbucketOutline;