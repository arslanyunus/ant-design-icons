// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartHomeBrokenSvg from '@ant-design/icons-svg/lib/asn/SmartHomeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartHomeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartHomeBroken: SmartHomeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartHomeBrokenSvg}></AntdIcon>;
};

SmartHomeBroken.displayName = 'SmartHomeBroken';
SmartHomeBroken.inheritAttrs = false;
export default SmartHomeBroken;