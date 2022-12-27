// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlagBulkSvg from '@ant-design/icons-svg/lib/asn/FlagBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlagBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlagBulk: FlagBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagBulkSvg}></AntdIcon>;
};

FlagBulk.displayName = 'FlagBulk';
FlagBulk.inheritAttrs = false;
export default FlagBulk;