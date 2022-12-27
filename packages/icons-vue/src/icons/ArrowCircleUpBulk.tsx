// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowCircleUpBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowCircleUpBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowCircleUpBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowCircleUpBulk: ArrowCircleUpBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowCircleUpBulkSvg}></AntdIcon>;
};

ArrowCircleUpBulk.displayName = 'ArrowCircleUpBulk';
ArrowCircleUpBulk.inheritAttrs = false;
export default ArrowCircleUpBulk;