// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaintbucketBoldSvg from '@ant-design/icons-svg/lib/asn/PaintbucketBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaintbucketBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaintbucketBold: PaintbucketBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaintbucketBoldSvg}></AntdIcon>;
};

PaintbucketBold.displayName = 'PaintbucketBold';
PaintbucketBold.inheritAttrs = false;
export default PaintbucketBold;