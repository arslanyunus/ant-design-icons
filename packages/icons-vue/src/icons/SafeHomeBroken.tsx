// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SafeHomeBrokenSvg from '@ant-design/icons-svg/lib/asn/SafeHomeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SafeHomeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SafeHomeBroken: SafeHomeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafeHomeBrokenSvg}></AntdIcon>;
};

SafeHomeBroken.displayName = 'SafeHomeBroken';
SafeHomeBroken.inheritAttrs = false;
export default SafeHomeBroken;