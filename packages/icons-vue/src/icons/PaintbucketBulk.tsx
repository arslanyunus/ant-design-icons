// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaintbucketBulkSvg from '@ant-design/icons-svg/lib/asn/PaintbucketBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaintbucketBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaintbucketBulk: PaintbucketBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaintbucketBulkSvg}></AntdIcon>;
};

PaintbucketBulk.displayName = 'PaintbucketBulk';
PaintbucketBulk.inheritAttrs = false;
export default PaintbucketBulk;