// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GrammerlyBulkSvg from '@ant-design/icons-svg/lib/asn/GrammerlyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GrammerlyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GrammerlyBulk: GrammerlyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GrammerlyBulkSvg}></AntdIcon>;
};

GrammerlyBulk.displayName = 'GrammerlyBulk';
GrammerlyBulk.inheritAttrs = false;
export default GrammerlyBulk;