// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleDownBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleDownBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleDownBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleDownBulk: ArrowCircleDownBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleDownBulkSvg}></AntdIcon>;
};

ArrowCircleDownBulk.displayName = 'ArrowCircleDownBulk';
ArrowCircleDownBulk.inheritAttrs = false;
export default ArrowCircleDownBulk;