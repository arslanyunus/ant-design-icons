// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRightBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowRightBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRightBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRightBulk: ArrowRightBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRightBulkSvg}></AntdIcon>;
};

ArrowRightBulk.displayName = 'ArrowRightBulk';
ArrowRightBulk.inheritAttrs = false;
export default ArrowRightBulk;