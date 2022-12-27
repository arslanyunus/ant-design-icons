// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSwapBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowSwapBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSwapBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSwapBulk: ArrowSwapBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSwapBulkSvg}></AntdIcon>;
};

ArrowSwapBulk.displayName = 'ArrowSwapBulk';
ArrowSwapBulk.inheritAttrs = false;
export default ArrowSwapBulk;