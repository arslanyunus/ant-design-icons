// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SortBulkSvg from '@ant-design/icons-svg/lib/asn/SortBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SortBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SortBulk: SortBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SortBulkSvg}></AntdIcon>;
};

SortBulk.displayName = 'SortBulk';
SortBulk.inheritAttrs = false;
export default SortBulk;