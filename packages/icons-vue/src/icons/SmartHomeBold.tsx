// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartHomeBoldSvg from '@ant-design/icons-svg/lib/asn/SmartHomeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartHomeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartHomeBold: SmartHomeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartHomeBoldSvg}></AntdIcon>;
};

SmartHomeBold.displayName = 'SmartHomeBold';
SmartHomeBold.inheritAttrs = false;
export default SmartHomeBold;