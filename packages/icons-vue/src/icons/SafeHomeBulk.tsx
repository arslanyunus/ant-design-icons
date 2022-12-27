// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SafeHomeBulkSvg from '@ant-design/icons-svg/lib/asn/SafeHomeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SafeHomeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SafeHomeBulk: SafeHomeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafeHomeBulkSvg}></AntdIcon>;
};

SafeHomeBulk.displayName = 'SafeHomeBulk';
SafeHomeBulk.inheritAttrs = false;
export default SafeHomeBulk;