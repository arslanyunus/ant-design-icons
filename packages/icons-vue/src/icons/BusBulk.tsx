// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BusBulkSvg from '@ant-design/icons-svg/lib/asn/BusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BusBulk: BusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BusBulkSvg}></AntdIcon>;
};

BusBulk.displayName = 'BusBulk';
BusBulk.inheritAttrs = false;
export default BusBulk;