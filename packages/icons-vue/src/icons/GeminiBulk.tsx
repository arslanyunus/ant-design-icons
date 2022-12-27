// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GeminiBulkSvg from '@ant-design/icons-svg/lib/asn/GeminiBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GeminiBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GeminiBulk: GeminiBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GeminiBulkSvg}></AntdIcon>;
};

GeminiBulk.displayName = 'GeminiBulk';
GeminiBulk.inheritAttrs = false;
export default GeminiBulk;