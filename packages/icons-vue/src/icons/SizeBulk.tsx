// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SizeBulkSvg from '@ant-design/icons-svg/lib/asn/SizeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SizeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SizeBulk: SizeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SizeBulkSvg}></AntdIcon>;
};

SizeBulk.displayName = 'SizeBulk';
SizeBulk.inheritAttrs = false;
export default SizeBulk;