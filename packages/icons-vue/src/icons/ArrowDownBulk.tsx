// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDownBulkSvg from '@ant-design/icons-svg/lib/asn/ArrowDownBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDownBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDownBulk: ArrowDownBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDownBulkSvg}></AntdIcon>;
};

ArrowDownBulk.displayName = 'ArrowDownBulk';
ArrowDownBulk.inheritAttrs = false;
export default ArrowDownBulk;