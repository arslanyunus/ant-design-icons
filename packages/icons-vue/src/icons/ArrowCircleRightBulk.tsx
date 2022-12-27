// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleRightBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleRightBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleRightBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleRightBulk: ArrowCircleRightBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleRightBulkSvg}></AntdIcon>;
};

ArrowCircleRightBulk.displayName = 'ArrowCircleRightBulk';
ArrowCircleRightBulk.inheritAttrs = false;
export default ArrowCircleRightBulk;