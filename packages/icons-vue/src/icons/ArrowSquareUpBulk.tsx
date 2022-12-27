// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowSquareUpBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowSquareUpBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowSquareUpBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowSquareUpBulk: ArrowSquareUpBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowSquareUpBulkSvg}></AntdIcon>;
};

ArrowSquareUpBulk.displayName = 'ArrowSquareUpBulk';
ArrowSquareUpBulk.inheritAttrs = false;
export default ArrowSquareUpBulk;