// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FatrowsBulkSvg from '@ant-design/icons-svg/lib/asn/FatrowsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FatrowsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FatrowsBulk: FatrowsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FatrowsBulkSvg}></AntdIcon>;
};

FatrowsBulk.displayName = 'FatrowsBulk';
FatrowsBulk.inheritAttrs = false;
export default FatrowsBulk;