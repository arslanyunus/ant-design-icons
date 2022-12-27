// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SafeHomeBoldSvg from '@ant-design/icons-svg/lib/asn/SafeHomeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SafeHomeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SafeHomeBold: SafeHomeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafeHomeBoldSvg}></AntdIcon>;
};

SafeHomeBold.displayName = 'SafeHomeBold';
SafeHomeBold.inheritAttrs = false;
export default SafeHomeBold;