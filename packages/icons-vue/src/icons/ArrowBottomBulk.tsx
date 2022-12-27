// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowBottomBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowBottomBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowBottomBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowBottomBulk: ArrowBottomBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowBottomBulkSvg}></AntdIcon>;
};

ArrowBottomBulk.displayName = 'ArrowBottomBulk';
ArrowBottomBulk.inheritAttrs = false;
export default ArrowBottomBulk;