// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TranslateBulkSvg from '@ant-design/icons-svg/lib/asn/TranslateBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TranslateBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TranslateBulk: TranslateBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TranslateBulkSvg}></AntdIcon>;
};

TranslateBulk.displayName = 'TranslateBulk';
TranslateBulk.inheritAttrs = false;
export default TranslateBulk;