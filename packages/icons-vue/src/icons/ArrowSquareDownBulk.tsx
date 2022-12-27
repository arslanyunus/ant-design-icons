// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareDownBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareDownBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareDownBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareDownBulk: ArrowSquareDownBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareDownBulkSvg}></AntdIcon>;
};

ArrowSquareDownBulk.displayName = 'ArrowSquareDownBulk';
ArrowSquareDownBulk.inheritAttrs = false;
export default ArrowSquareDownBulk;