// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUpBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowUpBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUpBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUpBulk: ArrowUpBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpBulkSvg}></AntdIcon>;
};

ArrowUpBulk.displayName = 'ArrowUpBulk';
ArrowUpBulk.inheritAttrs = false;
export default ArrowUpBulk;