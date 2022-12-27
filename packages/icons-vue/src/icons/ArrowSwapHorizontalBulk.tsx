// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSwapHorizontalBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowSwapHorizontalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSwapHorizontalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSwapHorizontalBulk: ArrowSwapHorizontalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSwapHorizontalBulkSvg}></AntdIcon>;
};

ArrowSwapHorizontalBulk.displayName = 'ArrowSwapHorizontalBulk';
ArrowSwapHorizontalBulk.inheritAttrs = false;
export default ArrowSwapHorizontalBulk;